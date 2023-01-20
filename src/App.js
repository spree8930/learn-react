import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from './data';

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <>
            <Navbar />
            <Hero />
            <section class="card-list">
                {cards}
            </section>
        </>
    );
}