import { useState } from "react";
import "./loginForm.css";

export function LoginForm() {
  const [loginValues, setloginValues] = useState({
    email: "",
    password: "",
  });

  function handleLoginSubmit(event) {
    event.preventDefault();
    console.log(loginValues);
  }

  function handleLoginChange(identifier, value) {
    setloginValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
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
            onChange={(event) => handleLoginChange("email", event.target.value)}
            value={loginValues.email}
          />
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
          />
        </div>
        <button className="userLoginButton">login</button>
      </form>
    </div>
  );
}
