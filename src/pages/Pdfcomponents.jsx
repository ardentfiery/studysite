import React from 'react'
// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


// Create new plugin instance




const Pdfcomponents = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
        <Viewer
    fileUrl='/public/udemy.pdf'
    plugins={[
        // Register plugins
        defaultLayoutPluginInstance,
        
    ]}
/>
    </div>
  )
}

export default Pdfcomponents