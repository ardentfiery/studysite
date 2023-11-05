import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./Todo.css";

const Todo = () => {
    const localStorage = window.localStorage;
    const gettodos = () => {
        const gottodos = localStorage.getItem("todoarray");
        console.log(gottodos);
        if (gottodos === "undefined" || gottodos === "null"){
            return [];
        } else {
            return JSON.parse(localStorage.getItem("todoarray"));
        }
    };
    const [storetodo, setstoretodo] = useState(gettodos());
    const inputreference = useRef(""); //input field ma lekheko value haru yesbata lina milxa, access hunxa tyako

    const addTodofunc = () => {
        // console.log(inputreference.current.value);
        const currenttodo = inputreference.current.value;
        if (currenttodo.trim() === "") {  //.trim le chia tyo extra space lai hataidiinxa soo space matra add garem bhane tyo katidinxa
            return;
        } else {
            const todoobject = {
                todo: currenttodo,
                ticked: false,
            };
            try {
                setstoretodo((previoustodos) => [...previoustodos, todoobject]);
            } catch (error) {
                setstoretodo((previoustodos) => [todoobject]);
            }

            // setstoretodo((previoustodos) => [todoobject]); //setstoretodo le immediately value update gardaina matlab eaota todo xutirakhxa , soo tyo tala ko use effect use gareko jasko dependenct ma storetodo array rkahnuparxa
            inputreference.current.value = ""; //yo chai input field ko value lai clear gardeko empty string diyera
        }
    };

    const deleteFunction = (index) => {
        console.log(index);
        const updatedarray = storetodo.filter(
            (value, valueindex) => index !== valueindex
        );
        setstoretodo(updatedarray);
    };

    const tickedFunction = (index) => {
        //tala bata pathako index ligeko hai
        const storetodovariable = storetodo.map((todoobject, todoindex) => {
            if (todoindex == index) {
                return {
                    todo: todoobject.todo,
                    ticked: true,
                };
            } else {
                return todoobject;
            }
        });
        setstoretodo(storetodovariable);
    };

    useEffect(() => {
        const stringarray = JSON.stringify(storetodo); //yesle array as a parameter linxa ani json ma convert gardinxa
        localStorage.setItem("todoarray", stringarray); //console ma application ma click garera local storage herne
    }, [storetodo]);

    return (
        <div className="todoholder">
            <div className="topmost">
                <div className="inputfield">
                    <input
                        type="text"
                        placeholder="What are your plans for today??"
                        ref={inputreference}
                    />
                </div>
                <div>
                    <button onClick={addTodofunc} className="todobtn">
                        Add
                    </button>
                </div>
            </div>
            <div className="todo_section">
                {storetodo?.map((mytodo, index) => {
                    return (
                        <div key={index} className="singletodo">
                            {" "}
                            {/*key chai return ko main parent div lai dinuparxa hai ta*/}
                            <div
                                className={`addedtodo ${
                                    mytodo.ticked
                                        ? "tickedtodo"
                                        : "untickedtodo"
                                }`}
                            >
                                {mytodo.todo}
                            </div>
                            <div
                                onClick={() => {
                                    tickedFunction(index);
                                }}
                                className="todoicons"
                            >
                                <img src="check.png" alt="" />
                            </div>
                            <div
                                onClick={() => {
                                    deleteFunction(index);
                                }}
                                className="todoicons"
                            >
                                <img src="delete.png" alt="" />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="lastdiv">
                <p>Make your day productive!</p>
            </div>
        </div>
    );
};

export default Todo;
