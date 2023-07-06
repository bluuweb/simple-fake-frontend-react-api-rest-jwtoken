/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const initialStateToken = localStorage.getItem("token");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(initialStateToken);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      getProfileUser(token);
    } else {
      setUser(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProfileUser = async (access_token) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const data = await res.json();
      setUser(data);
    } catch (error) {
      setUser(false);
    }
  };

  const saveToken = async (access_token) => {
    try {
      setLoading(true);
      setToken(access_token);
      await getProfileUser(access_token);
      localStorage.setItem("token", access_token);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(false);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ saveToken, user, token, getProfileUser, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
