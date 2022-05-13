import React from "react";
import { Route, Routes } from "react-router-dom";
import GuestLayout from "../components/layouts/GuestLayout";
import sideRoutes from "./sideRoutes";
const AppRoute = () => {
  const SideRouters = sideRoutes.map((route) => ({
    name: route.name,
    path: route.path,
    icon: route.icon,
    card: route.card,
    component: route.component,
  }));
  return (
    <Routes>
      {SideRouters.map((route, key) => (
        <Route
          exact
          key={key}
          path={route.path}
          element={
            <GuestLayout card_info={route.card} children={route.component} />
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoute;
