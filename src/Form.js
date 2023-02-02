import React from "react";

export default function Form() {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    function handleChangeFirst(event){
        setFirstName(event.target.value);
    }
    function handleChangeLast(event){
        setLastName(event.target.value);
    }
    return (
        <form>
            <input type="text" placeholder="First Name" onChange={handleChangeFirst}></input>
            <input type="text" placeholder="Last Name" onChange={handleChangeLast}></input>
            <p>{firstName} {lastName}</p>
        </form>
    );
}