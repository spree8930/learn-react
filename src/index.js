import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const App = () => {
    return (
        <div>
            Hello World
       </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
