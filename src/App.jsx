import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";
import { Landing } from "./pages/landing";
import { ProfileCardPage } from "./pages/profile-card-page";
import { WeatherAppPage } from "./pages/weather-app-page";
import { ToDoListAppPage } from "./pages/toDoList-page";
import { LoginFormPage } from "./pages/login-form-page";
import { SignUpFormPage } from "./pages/signUp-form-page";
import { SignUpFormV2Page } from "./pages/signUp-formv2-page";
import GithubProfileCard from "./pages/github-profile-page";
import MovieSearchApp from "./pages/movie-search-page";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import BlogPage from "./pages/blog-page/infinite-blog-page";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mainContainer">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/profile-card" element={<ProfileCardPage />}></Route>
            <Route path="/weather-app" element={<WeatherAppPage />}></Route>
            <Route path="/todo-list-app" element={<ToDoListAppPage />}></Route>
            <Route path="/login-form" element={<LoginFormPage />}></Route>
            <Route path="/signup-form" element={<SignUpFormPage />}></Route>
            <Route path="/signup-formv2" element={<SignUpFormV2Page />}></Route>
            <Route
              path="/github-profile-page"
              element={<GithubProfileCard />}
            ></Route>
            <Route
              path="/movie-search-page"
              element={<MovieSearchApp />}
            ></Route>
            <Route path="/blog-page" element={<BlogPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
