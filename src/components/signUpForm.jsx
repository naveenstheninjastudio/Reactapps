import "./signUpForm.css";

export function SignUpForm() {
  function handleSignUpSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    event.target.reset();
  }
  return (
    <div className="signUpForm">
      <div className="signUpFormTitle">
        Hello, welcome to ABC
        <p>Create your account</p>
      </div>
      <form className="userSignUpForm" onSubmit={handleSignUpSubmit}>
        <div className="userSignUpInput">
          <label htmlFor="first-name">First name</label>
          <input type="text" name="first-name" id="first-name" required />
        </div>
        <div className="userSignUpInput">
          <label htmlFor="last-name">Last name</label>
          <input type="text" name="last-name" id="last-name" required />
        </div>
        <div className="userSignUpInput">
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" />
        </div>
        <div className="userSignUpInput">
          <label htmlFor="userEmail">Email</label>
          <input type="email" name="email" id="userEmail" required />
        </div>
        <div className="userSignUpInput">
          <label htmlFor="userPassword">password</label>
          <input
            type="password"
            name="password"
            id="userPassword"
            minLength={6}
            required
          />
        </div>
        <button className="userSignUpButton">Register with us</button>
      </form>
      <div className="loginPrompt">
        Already have an account? <a href="/login-form">Login</a>
      </div>
    </div>
  );
}
