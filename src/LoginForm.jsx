import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    let currentErrors = {};

    if (!formData.email) {
      currentErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      currentErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.password) {
      currentErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      currentErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    setErrors(currentErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Replace with your actual API endpoint
    const mockApiEndpoint = "https://jsonplaceholder.typicode.com/posts";

    try {
      const response = await fetch(mockApiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Perform further actions here such as redirecting the user or storing logged-in state
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({ form: "Login failed. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="bg-blue-800 h-screen flex items-center justify-center p-4">
    <div className="bg-gray-950 bg-opacity-40 rounded-lg w-full mx-8 sm:mx-0 sm:max-w-md text-white border-solid border-2 border-gray-100">
      <h2 className="text-2xl font-bold p-4 flex items-center justify-start border-solid border-b-2 border-gray-100 mb-4">
        <span className="mr-2">🚀</span>
        Start Your Journey
      </h2>
      <form onSubmit={handleSubmit} noValidate className="p-4 flex flex-col">
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded bg-gray-950 bg-opacity-40 text-white ${
              errors.email ? "border border-red-500" : ""
            }`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-3 rounded bg-gray-950 bg-opacity-40 text-white ${
              errors.password ? "border border-red-500" : ""
            }`}
            required
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          )}
        </div>
        {errors.form && (
          <p className="text-red-500 text-center mb-4">{errors.form}</p>
        )}
        <button
          type="submit"
          className="self-center text-center bg-indigo-600 hover:bg-blue-700 rounded py-2 px-4 font-bold transition-colors"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
    // </div>
  );
};

export default LoginForm;
