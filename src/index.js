import React from "react";
import ReactDOM from "react-dom/client";
import './index.scss'
import Info from './components/Info';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Info />
            <Content />
            <Footer />
        </>    
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
