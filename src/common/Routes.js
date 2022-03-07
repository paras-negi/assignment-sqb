import React from "react";
import { lazy } from "react";
import { Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import Login from "../pages/Login";

export const pageRoutes = [
  {
    path: "/",
    comp: <Home />,
    exact: true,
    authRequired: false,
  },
  {
    path: "/login",
    comp: <Login />,
    exact: true,
    authRequired: false,
  },
  {
    path: "/jobs",
    comp: <Jobs />,
    exact: true,
    authRequired: false,
  },
];

