import React from "react";
import ReactDOM from "react-dom/client";
import './index.scss'
import boxes from "./boxes";
import Box from "./Box"

const App = () => {
    const [squares, setSquares] = React.useState(boxes);
    const squareItems = squares.map(square => (
        <Box key={square.id} on={square.on}></Box>
    ))
    return (
        <main>
            <h1>{squareItems}</h1>
        </main>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
