import { useState } from "react";
import { useCookies } from "react-cookie";
import { regsiterUser, loginUser } from "../Service/api";
import { useNavigate } from "react-router-dom";
const RegisterAdmin = ({ isUserAuthenticated }) => {
  return (
    <>
      <Register />
    </>
  );
};

export default RegisterAdmin;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await regsiterUser({ username, password });
      setUsername("");
      setPassword("");
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Register"
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
     <form onSubmit={onSubmit}>
        <h1  style={{ textAlign: "center" }}>{label}</h1>
        <div className="inputs">
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="inputs">
          <label htmlFor="password">Password : </label>
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
