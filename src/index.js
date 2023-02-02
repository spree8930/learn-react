import React from "react";
import ReactDOM from "react-dom/client";
import './index.scss'
import Form from './Form'

const App = () => {
    return (
        <Form />
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
