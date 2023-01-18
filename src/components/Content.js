import React from "react";

export default function Content() {
    const items = [
        {
            "title": "About",
            "text": "I'm a frontend developer with a particular interest in making things simple and automating daily tasks. \
            I try to keep with security and best practices, and am always looking for new things to learn"
        },
        {
            "title": "Interests",
            "text": "Food Expert. Music Scholar. Reader. Internet fanatic. Bacon buff. Enterpreneur. Travel geek. Pop culture ninja. Coffee fanatic."
        }
    ]
    const content = items.map(item =>
        <div className="item">
            <p className="item-title">{item.title}</p>
            <p>{item.text}</p>
        </div>
    );
    return (
        <div className="content">
            {content}
        </div>  
    );
}