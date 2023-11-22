import React from "react";
import { publicRoutes } from "../router/routes";
import { userRoutes } from "../router/routes";
import { courseModeratorRoutes } from "../router/routes";
import { Route, Routes } from "react-router-dom";
import { UserRoleContext } from "../context/myContext";
import { useContext } from "react";
import { managerRoutes } from "../router/routes";
const AppRouter = () => {
  const { userRole } = useContext(UserRoleContext);

  let routesToRender;

  switch (userRole) {
    case "user":
      routesToRender = [...userRoutes, ...publicRoutes];
      break;
    case "courseModerator":
      routesToRender = [...courseModeratorRoutes, ...publicRoutes];
      break;
    case "siteManager":
      routesToRender = [...managerRoutes, ...publicRoutes];
      break;
    default:
      routesToRender = publicRoutes;
  }

  return (
    <Routes>
      {routesToRender.map((el) => (
        <Route path={el.path} element={<el.element />} key={el.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;