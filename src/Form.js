import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: ""
    });

    function handleChange(event){
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    return (
        <form>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange}></input>
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange}></input>
            <p>{formData.firstName} {formData.lastName}</p>
        </form>
    );
}