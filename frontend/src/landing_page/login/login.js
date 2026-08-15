import React, { useState } from "react";

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const response = await fetch("http://localhost:3002/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {

                alert(data.message);

                window.location.href = "http://localhost:3000";

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);
            alert("Something went wrong");

        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />

            <br />
            <br />

            <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />

            <br />
            <br />

            <button type="submit">
                Login
            </button>

        </form>
    );
}

export default Login;