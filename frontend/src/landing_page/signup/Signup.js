import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
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

            const response = await fetch("http://localhost:3002/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {

                alert(data.message);

                setFormData({
                    name: "",
                    email: "",
                    password: ""
                });

                navigate("/login");

            } else {

                alert(data.message);

                if (data.message === "User already exists") {
                    navigate("/login");
                }
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
                    Create Account
                </h2>

                <p className="text-center text-muted mb-4">
                    Sign up to start your Zerodha journey
                </p>

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

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
                    Sign Up
                </button>

                <p className="text-center mt-4 mb-0">
                    Already have an account?{" "}

                    <span
                        style={{
                            color: "#387ed1",
                            cursor: "pointer",
                            fontWeight: "500"
                        }}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </span>
                </p>

            </form>

        </div>
    );
}

export default SignUp;