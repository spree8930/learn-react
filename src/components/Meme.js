import React from "react";
import memesData from "../memesData.js"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memesArray[randomNumber].url
        }))
    }
    return (
        <main>
            <div className="form">
                <input className="form-input" placeholder="Enter text" type="text"></input>
                <input className="form-input" placeholder="Enter text" type="text"></input>
                <button onClick={getMemeImage} className="form-button">Get a new meme image  🖼</button>
            </div>
            <img src={meme.randomImage} />
        </main>
    );
}