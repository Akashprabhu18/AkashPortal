import React, { useState } from "react";
import "./loginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  FloatingLabel,
} from "react-bootstrap";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Add state for showing password

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div className="main">
      <div className="submain">
        <div className="firstGrid">
          <img src="./Images/logoimage.jpg" alt="Login" className="Login-img" />
        </div>
        <div className="secondGrid">
          <div className="form-wrapper">
            <img src="./Images/Savic.png" alt="Logo" className="Logo" />
            {isSignUp && (

              <FloatingLabel
                controlId="floatingName"
                label="Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Your Name" />
              </FloatingLabel>
            )}

            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
            </FloatingLabel>

            {isSignUp && (
              <FloatingLabel
                controlId="floatingConfirmPassword"
                label="Confirm Password"
                className="mb-3"
              >
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                />
              </FloatingLabel>
              
            )}
            <div className="d-flex justify-content-end mb-3 text-end">
              {" "}
              {/* Add text-end class */}
              <a
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"} Password
              </a>
            </div>
            <Button variant="primary" className="signinButton">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            <br />
            <span style={{ fontWeight: "bold" }}>
              {isSignUp
                ? "Already have an account? "
                : "Don't have an account? "}
              <span
                style={{
                  color: "#2e4167",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={isSignUp ? handleSignInClick : handleSignUpClick}
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </span>
            </span>{" "}
            {/* Copyright notice */}
            <div className="copyright">
              <p>&copy; SAVIC {new Date().getFullYear()} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
