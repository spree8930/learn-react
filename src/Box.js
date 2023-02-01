import React from "react"

export default function Box(props) {
    const [isOn, setIsOn] = React.useState(props.on);
    const styles = {
        backgroundColor: isOn ? "#222222" : "transparent"
    }
    function toggleIsOn() {
        setIsOn(prevState => !prevState);
    }

    return (
        <div className="square" style={styles} onClick={toggleIsOn}></div>
    )
}