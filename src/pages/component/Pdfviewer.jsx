import React from "react";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { useParams } from "react-router-dom";
import "../Pdf.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

const Pdfviewer = () => {
    let  {pdffilename} = useParams();
    console.log(pdffilename);

    const bookUrl = `https://quotesapi-five.vercel.app/books/${pdffilename}.pdf`;

    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="pdfpagehold">
            <div className="buttonandpage">
            <button
                onClick={() => {
                    if (pageNumber <= 1) {
                        return;
                    } else {
                        setPageNumber(pageNumber - 1);
                    }
                }}
            >
                prev
            </button>
            <button
                onClick={() => {
                    if (pageNumber >= numPages) {
                        return;
                    } else {
                        setPageNumber(pageNumber + 1);
                    }
                }}
            >
                next
            </button>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            </div>
           
            <div className="showbook">
                <Document
                    className="pdfbook"
                    file={bookUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    renderMode=""
                    onLoadError={(error) => {
                        console.log(error);
                    }}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
            
        </div>
    );
};

export default Pdfviewer;
