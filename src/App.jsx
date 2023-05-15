import { useState, useEffect } from "react";
import AllStores from "./Components/AllStores";
import AddStore from "./Components/AddStore";
import EditStore from "./Components/EditStore";
import NavBar from "./Components/Navbar";
import RegisterAdmin from "./Components/RegisterAdmin";
import NotFound from "./Components/NotFound";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Auth from "./Components/Auth";
import { useCookies } from "react-cookie";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const [cookies, _] = useCookies(["access_token"]);
  const token = cookies.access_token;
  return token ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/auth" />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <>
      <>
        <Routes>
          <Route
            path="/auth"
            element={<Auth isUserAuthenticated={isUserAuthenticated} />}
          />

          <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/" element={<Auth />} />
          </Route>

          <Route
            path="/all"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/all" element={<AllStores />} />
          </Route>
          <Route
            path="/add"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/add" element={<AddStore />} />
          </Route>
          <Route
            path="/edit/:id"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/edit/:id" element={<EditStore />} />
          </Route>
          <Route
            path="/registerAdmin"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/registerAdmin" element={<RegisterAdmin />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </>
    </>
  );
}

export default App;
