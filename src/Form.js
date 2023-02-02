import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    function handleChange(event){
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    return (
        <form>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName}></input>
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName}></input>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email}></input>
            <p>{formData.firstName} {formData.lastName} {formData.email}</p>
        </form>
    );
}