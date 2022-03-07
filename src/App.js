import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import { pageRoutes } from "./common/Routes";
import { withContext } from "./context/Context";

import "./styles/main.scss";

// import Error from "./pages/Error";

// const { cross } = icons;

// {context: {isUserLogin}}

function App() {
  // const [showToast, toggleToast] = useState({ show: 0, msg: "" });

  useEffect(() => {
    window.handleToastMsg = handleToastMsg;
  }, []);

  const handleToastMsg = (show, msg, time = 3000) => {
    toggleToast({ show, msg });

    setTimeout(() => {
      toggleToast({ show: false, msg: "" });
    }, time);
  };

  

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

// export const Snackbar = ({ show, msg, handleToastMsg }) => {
//   if (!show) return null;
//   return (
//     <div id="snackbar" className="snack-bg show">
//       {msg}
//     </div>
//   );
// };

 {/* <Snackbar
        show={showToast?.show}
        msg={showToast?.msg}
        handleToastMsg={handleToastMsg}
      /> */}
