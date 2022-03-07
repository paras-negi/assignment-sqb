import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import { pageRoutes } from "./common/Routes";
import { withContext } from "./context/Context";

import "./styles/main.scss";

function App() {
 

  

  return (
    <React.Fragment>
      <Router>
        <Routes>
          {pageRoutes.map((d, i) => (
            <Route key={i} path={d.path} element={d.comp} />

          ))}

          <Route component={Error} />
        </Routes>
      </Router>

     
    </React.Fragment>
  );
}

export default withContext(App);

