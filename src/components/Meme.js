import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(resData => setAllMemes(resData.data.memes))
    },[])
    
    const [allMemes, setAllMemes] = React.useState([]);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemes[randomNumber].url
        }))
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <main>
            <div className="form">
                <input className="form-input" placeholder="Enter text" type="text" name="topText" value={meme.topText} onChange={handleChange} />
                <input className="form-input" placeholder="Enter text" type="text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <button onClick={getMemeImage} className="form-button">Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text">{meme.topText}</h2>
                <h2 className="meme-text">{meme.bottomText}</h2>
            </div>
        </main>
    );
}