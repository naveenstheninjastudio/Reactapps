import "./landing.css";

export function Landing() {
  return (
    <div className="container">
      <a className="task" href="/profile-card">
        Profile Card
      </a>
      <a className="task" href="/weather-app">
        Weather App
      </a>
      <a className="task" href="/todo-list-app">
        ToDo list
      </a>
      <a className="task" href="/login-form">
        Login form
      </a>
    </div>
  );
}
