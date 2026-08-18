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

            const response = await fetch("https://zerodha-backend-c87q.onrender.com/login", {
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

                window.location.href = "https://zerodha-dashboard-garv15.vercel.app";

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);
            alert("Something went wrong");

        }
    };

    return (
        <div
            style={{
                minHeight: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <form
                onSubmit={handleSubmit}
                style={{
                    width: "400px",
                    padding: "35px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                    backgroundColor: "white"
                }}
            >

                <h2 className="text-center mb-2">
                    Welcome Back
                </h2>

                <p className="text-center text-muted mb-4">
                    Login to your Zerodha account
                </p>

                <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    className="form-control mb-4"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                >
                    Login
                </button>

                <p className="text-center mt-4 mb-0">
                    Don't have an account?{" "}

                    <span
                        style={{
                            color: "#387ed1",
                            cursor: "pointer",
                            fontWeight: "500"
                        }}
                        onClick={() => {
                            window.location.href = "/signup";
                        }}
                    >
                        Sign Up
                    </span>
                </p>

            </form>

        </div>
    );
}

export default Login;