import React from "react";
import ReactDOM from "react-dom/client";
import './index.scss'
import Header from "./components/Header";
import Meme from "./components/Meme";

const App = () => {
    return (
        <div>
            <Header />
            <Meme />
       </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
