import { useState } from "react";
import { useCookies } from "react-cookie";
import { regsiterUser, loginUser } from "../Service/api";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
const Auth = ({ isUserAuthenticated }) => {
  return (
    <>
      <Login isUserAuthenticated={isUserAuthenticated} />
    </>
  );
};

export default Auth;

const Login = ({ isUserAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookie] = useCookies("[access_token]");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password });
      setCookie("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      setUsername("");
      setPassword("");
      isUserAuthenticated(true);
      navigate("/all");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Login"
        onSubmit={onSubmit}
      />
    </>
  );
};

const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
}) => {
  return (
    <>
      <div className="login-form">
        <form onSubmit={onSubmit} autocomplete="off">
          <h1 style={{ textAlign: "center" }}>{label}</h1>
          <div className="inputs">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
           
            />
          </div>
          <div className="inputs">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="username"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
             
            />
          </div>
          <div style={{ textAlign: "center" }} className="login-btn">
            <button type="submit">{label}</button>
          </div>
        </form>
      </div>
    </>
  );
};
