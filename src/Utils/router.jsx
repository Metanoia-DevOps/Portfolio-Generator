//Entry point for the webpack and deals with the routes
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import RoutePaths from "Utils/routes";

const WebRoute = () => {
  return (
    <Router>
      <Routes>
        {RoutePaths.map((route) => {
          return (
            <Route
              path={route.route}
              element={route.component}
              key={route.key}
            />
          );
        })}
        {/* <Route path="*" element={<Navigate to={getRoute("home")} />} /> */}
      </Routes>
    </Router>
  );
};

export default WebRoute;
