import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./styles/main.css";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { UserRoleContext } from "./context/myContext";
function App() {
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("userRole")) {
      setUserRole(localStorage.getItem("userRole"));
    }
  }, []);
  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </UserRoleContext.Provider>
  );
}

export default App;
