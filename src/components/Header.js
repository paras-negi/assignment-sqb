import React from "react";
import icons from "../common/Images";
import { withContext } from "../context/Context";

const { logo, home_main } = icons;

function Header({ context: { isUserLogin, userInfo } }) {
  return (
    <header className="header bg-dark ">
      <div className="headContainer flex justify-space align-center">
        <div className="header-left">
          <div className="header-left__logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div className="header-right">
          <div className="header-right__logo">
            {isUserLogin ? (
              <div>{userInfo?.name} </div>
            ) : (
              <button className="btn login-btn">Login/Signup</button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default withContext(Header);
