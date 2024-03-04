import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import AuthContext from "./config/context/auth-context";
import { authManager } from "./config/context/auth-manager";
import AppRouter from "../src/router/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { signed: false };
};

function App() {
  const [user, dispatch] = useReducer(authManager, {}, init);
  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}
export default App;