import { Navigate, Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const { loading, user } = useContext(AuthContext);

  if (user === null) return <div>Loading...</div>;

  return (
    <Container maxWidth="sm">
      <Navbar />
      <Box sx={{ my: 4 }}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/dashboard"
            element={
              user && !loading ? <Dashboard /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </Box>
    </Container>
  );
};

export default App;
