import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import GuestLayout from "../components/layouts/GuestLayout";
import sideRoutes from "./sideRoutes";
const AppRoute = () => {
  return (
    <Routes>
      {sideRoutes.map((route, key) => (
        <Route
          exact
          key={key}
          path={route.path}
          element={<GuestLayout children={route.component} />}
        />
      ))}
    </Routes>
  );
};

export default AppRoute;
