import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { Context } from "./context/CartContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render( <
    React.StrictMode >
    <
    BrowserRouter >
    <
    AuthProvider >
    <
    Context >
    <
    App / >
    <
    /Context> <
    /AuthProvider> <
    /BrowserRouter> <
    /React.StrictMode>
)