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

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="main">
      <div className="submain">
        <div className="firstGrid">
          <img src="./Images/Login.png" alt="Login" className="Login-img" />
        </div>
        <div className="secondGrid">
          <div className="form-wrapper">
            <img src="./Images/Savic.png" alt="Logo" className="Logo" />
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <Button variant="primary" className="signinButton">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            <br />
            <span style={{ fontWeight: "bold" }}>
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <span
                style={{
                  color: "#2e4167",
                  textDecoration: "underLine",
                  cursor: "pointer",
                }}
                onClick={isSignUp ? handleSignInClick : handleSignUpClick}
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
