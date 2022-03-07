import React, { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Modal from "../components/Modal";

import RingLoader from "../components/RingLoader";
import { withContext } from "../context/Context";

// import Breadcrumbs from "../components/Breadcrumb";
// import Arrow from "../../src/assets/arrow-left.svg";


function MainLayout(props) {
  const {
    children,
    authRequired = true,
    loading = true,
    footer = false,
    title = "Test",
    context: { isUserLogin },
    loginPage = false,
  } = props;


  useEffect(() => {
    document.title = title;
  }, [title]);

  if (!authRequired && isUserLogin && loginPage) {
    return <Navigate to="/" replace />;
  }

  if (authRequired && !isUserLogin) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return (
      <div className="main-loader">
        <RingLoader mainLoader />
      </div>
    );
  }

  return (
    <main className="main-body">
      <Header isLoginPage={loginPage}/>
      {children} {footer ? <Footer /> : null} {/* <Modal/> */}
    </main>
  );
}

export default withContext(MainLayout);
