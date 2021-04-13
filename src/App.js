import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const handelName = () => {
    alert("Bonjour  seif ");
  };
  return (
    <div className="App">
      <Profile
        handelName={handelName}
        fullName="ghariani seif"
        img="./img/photo.jpg"
        bio="je travaille a go my code"
        profession="Web Developer"
        handelName={handelName}
      />
    </div>
  );
}
export default App;
