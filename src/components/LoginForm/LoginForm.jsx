import React,  { useState } from "react";
function LoginForm() {

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",


    });


    const handleChange = (e) => {
        const {id, value} =e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]:value,
        }));
        
    };

    return(
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                type="text"
                id="username" 
                placeholder="Enter username" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                id="password" 
                placeholder="Enter password" />

            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;