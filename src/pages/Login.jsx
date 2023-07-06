import { Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("john@mail.com");
  const [password, setPassword] = useState("changeme");

  const { saveToken, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    await saveToken(data.access_token);
    navigate("/dashboard");
  };

  return (
    <div>
      <Typography
        variant="h3"
        component="h1"
      >
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingrese email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          disabled={loading}
        >
          Acceder
        </Button>
      </form>
    </div>
  );
};
export default Login;
