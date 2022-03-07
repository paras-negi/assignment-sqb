import React, { useEffect, useRef, useState } from "react";
import { Navigate } from 'react-router-dom';

import Header from "../components/Header";
import Footer from "../components/Footer";
import icons from "../common/Images";
import Modal from "../components/Modal";

import RingLoader from "../components/RingLoader";
// import Breadcrumbs from "../components/Breadcrumb";
import { withContext } from "../context/Context";
// import Arrow from "../../src/assets/arrow-left.svg";

const { logo, home_main, location, home, cross, no_jobs } = icons;

function MainLayout(props) {
  const { children, authRequired=true, loading = true, footer = false, title = "Test", context: {isUserLogin}, loginPage=false} = props;
  const [login, checkLogin] = useState(false);

  // useEffect(() => {checkLogin(isUserLogin)}, [isUserLogin]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  if(!authRequired && isUserLogin && loginPage){
    return <Navigate to="/" replace />;
  }

  if(authRequired && !isUserLogin){
    return <Navigate to="/login" replace />;
  }

  // if(redirect && redirectUrl){
  //   history.push("/shop");
  //   return null;
  // }

  // console.log({scrollPos});

  if (loading){
    return (
      <div className="main-loader">
        <RingLoader mainLoader />
      </div>
    );
  }

  return (
    <main className="main-body">
      <Header />
      {children} {footer ? <Footer /> : null}{" "}
      {/* <Modal/> */}
    </main>
  );
}

export default withContext(MainLayout);
