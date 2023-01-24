import React from "react";
import ReactDOM from "react-dom/client";
import './index.scss'
import data from './data'
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const App = () => {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <section class="card-list">
                {cards}
            </section>
       </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
