import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    });

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: type === "checkbox" ? checked: value
        }));
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
            <textarea name="comments" placeholder="Comments" onChange={handleChange} value={formData.comments}/>
            <input type="checkbox" name="isFriendly" id="isFriendly" onChange={handleChange} checked={formData.isFriendly} />
            <label htmlFor="isFriendly">Are you friendly?</label>

            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    name="employment"
                    id="unemployed"
                    value="unemployed"
                    checked={formData.employment==="unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    name="employment"
                    id="part-time"
                    value="part-time"
                    checked={formData.employment==="part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    name="employment"
                    id="full-time"
                    value="full-time"
                    checked={formData.employment==="full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select id="favColor" name="favColor" onChange={handleChange} value={formData.favColor}>
                <option value=""> -- Choose -- </option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <button>Submit</button>
        </form>
    );
}