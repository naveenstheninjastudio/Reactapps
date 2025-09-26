import { useState } from "react";
import "./loginForm.css";

export function LoginForm() {
  const [loginValues, setloginValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !loginValues.email.includes("@");

  function handleLoginSubmit(event) {
    event.preventDefault();
    console.log(loginValues);
    setloginValues({
      email: "",
      password: "",
    });
    setDidEdit({
      email: false,
      password: false,
    });
  }

  function handleLoginChange(identifier, value) {
    setloginValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <div className="loginForm">
      <div className="loginFormTitle">
        welcome to ABC
        <p>Kindly login to your account</p>
      </div>
      <form className="userLoginForm" onSubmit={handleLoginSubmit}>
        <div className="userLoginInput">
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            name="email"
            id="userEmail"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleLoginChange("email", event.target.value)}
            value={loginValues.email}
            required
          />
          <div className="userInputError">
            {emailIsInvalid && <div>Please enter a valid email address.</div>}
          </div>
        </div>
        <div className="userLoginInput">
          <label htmlFor="userPassword">password</label>
          <input
            type="password"
            name="password"
            id="userPassword"
            onChange={(event) =>
              handleLoginChange("password", event.target.value)
            }
            value={loginValues.password}
            minLength={6}
            required
          />
        </div>
        <button className="userLoginButton">login</button>
      </form>
      <div className="signupPrompt">
        Don't have an account? <a href="/signup-form">SignUp</a>
      </div>
    </div>
  );
}
