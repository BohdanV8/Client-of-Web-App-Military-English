import React from "react";
import { privateRoutes } from "../router/routes";
import { publicRoutes } from "../router/routes";
import { Route, Routes } from "react-router-dom";
const AppRouter = () => {
  const isAuth = localStorage.getItem("userId");
  return isAuth ? (
    <Routes>
      {privateRoutes.map((el) => (
        <Route path={el.path} element={<el.element />} key={el.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((el) => (
        <Route path={el.path} element={<el.element />} key={el.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
