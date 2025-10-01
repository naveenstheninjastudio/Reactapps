import axios from "axios";
import "./github-profile-page.css";
import { useState } from "react";
import searchsvg from "../../public/searchicon.svg";
import task from "../../public/task.svg";
import user from "../../public/user.svg";

export default function GithubProfileCard() {
  const [githubUser, setGithubUser] = useState("");
  const [githubUserData, setGithubUserData] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(`handlesubmit is working`);
    axios
      .get(`https://api.github.com/users/${githubUser}`)
      .then((response) => {
        setGithubUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(githubUserData);
  }
  return (
    <div className="githubProfileContainer">
      <div className="githubProfileCard">
        <div className="githubProfileSearchBar">
          <form onSubmit={handleSubmit} className="gtihubSearchBarForm">
            <input
              type="text"
              placeholder="username"
              id="username"
              onChange={(e) => setGithubUser(e.target.value)}
            />

            <button className="githubSearchButton" type="submit">
              <img src={searchsvg} />
            </button>
          </form>
        </div>
        {!githubUserData?.login ? (
          <div>Enter Github username to get profile</div>
        ) : (
          <>
            <div className="githubProfileImage">
              <img src={githubUserData?.avatar_url} alt="avatarImage" />
            </div>
            <div className="githubProfileInfo">
              <div className="githubProfileName">
                {githubUserData?.name !== null
                  ? githubUserData?.name
                  : githubUserData.login}
              </div>
              <div className="githubProfileBio">{githubUserData?.bio}</div>
            </div>

            <div className="githubProfileStats">
              <div className="githubFollowerCount">
                <img src={user} alt="" />
                {githubUserData.followers}
              </div>
              <div className="githubRepos">
                <img src={task} alt="" />
                {githubUserData.public_repos}
              </div>
              <div className="githubProfileLink">
                <a href={githubUserData.html_url}>Github</a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
