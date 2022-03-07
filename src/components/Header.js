import React from "react";
import { useNavigate } from "react-router-dom";
import icons from "../common/Images";
import { withContext } from "../context/Context";

const { logo, home_main } = icons;

function Header({ context: { isUserLogin, userInfo }, isLoginPage }) {
  const navigate = useNavigate();

  const onClickLoginLogout = () => {
    navigate("/login");
  };

  return (
    <header className="header bg-dark ">
      <div className="headContainer flex justify-space align-center">
        <div className="header-left">
          <div className="header-left__logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div className="header-right">
          {!isLoginPage ? (
            <div className="header-right__logo">
              {isUserLogin ? (
                <div>{userInfo?.name} </div>
              ) : (
                <button className="btn login-btn" onClick={onClickLoginLogout}>
                  Login/Signup
                </button>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default withContext(Header);
