import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";


function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [mag, setmag] = useState("");
  const [response, setresponse] = useState({});
  const dispatch = useDispatch();
  const authData = useSelector((data)=> data.auth)
  // let auth = { token: true };
  const navigate = useNavigate();
  useEffect(() => {
  if (authData.data?.token) {
    navigate("/");
  }
  }, [authData])
   useEffect(() => {
     if (authData.data?.token) {
       navigate("/");
     }
   }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((res) => setresponse(res));
  };


  useEffect(() => {
    if(response){
  dispatch(login(response))
    }
  
  }, [response])
  

  return (
    <div className="container">
      <div className="login-box">
        <p>{authData.data?.message ? authData.data.message : ""}</p>
        <h1>Login</h1>

        <form action="" onSubmit={handleSubmit}>
          <div className="username">
            <label htmlFor="username">User Name</label>
            <input
              onChange={(e) => setusername(e.target.value)}
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div className="username">
            <label htmlFor="username">Password</label>
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button className="button" type="submit">
            Submit
          </button>
          <p>use username/password: kminchelle / 0lelplR</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
