import React from "react";
import ReactDom from "react-dom/client"
import Hello from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Hello/>
    </React.StrictMode>
)