import React from "react";
import { publicRoutes } from "../router/routes";
import { userRoutes } from "../router/routes";
import { courseModeratorRoutes } from "../router/routes";
import { Route, Routes } from "react-router-dom";
import { UserRoleContext } from "../context/myContext";
import { useContext } from "react";

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
      return (
        <h1>
          siteManager Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nesciunt sapiente iusto, quis necessitatibus delectus, aspernatur quasi
          eveniet voluptatem tempore nihil autem velit esse! Accusamus aliquid
          ratione voluptate voluptatibus odio velit.
        </h1>
      );
    default:
      // Якщо роль не визначена, ви можете задати за замовчуванням
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