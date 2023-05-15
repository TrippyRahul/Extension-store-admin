import { AppBar, Toolbar, styled } from "@mui/material";
import { useCookies } from "react-cookie";
import { NavLink, Navigate } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;

const NavBar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
Navigate("/auth")
  };
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/all" exact>
          All Stores
        </Tabs>
        <Tabs to="/add" exact>
          Add Store
        </Tabs>
        <Tabs to="/registerAdmin" exact>
          Add a new admin
        </Tabs>
        <Tabs onClick={logout}>Logout</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
