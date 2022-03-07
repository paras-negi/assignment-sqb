import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import icons, { static_images } from "../common/Images";
import { withContext } from "../context/Context";

const { logo, home_main } = icons;

function Header({
  context: { isUserLogin, userInfo, logoutUser },
  isLoginPage,
}) {
  const navigate = useNavigate();

  const [logoutWarn, setLogoutwarn] = useState(false);

  const onClickLoginLogout = (_case) => {
    if (_case === "logout") {
      logoutUser();
      setLogoutwarn(true);

      setTimeout(() => {
        setLogoutwarn(false);
        navigate("/");
      }, 5000);

      return;
    }

    navigate("/login");
    return;
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
                <div className="profile">
                  <div className="username flex align-center">
                    <span>{userInfo?.name?.charAt(0)}</span>{" "}
                    <img src={static_images?.dropdown} />
                  </div>

                  <div className="headDropdown">
                    <a onClick={() => onClickLoginLogout("logout")}>Logout</a>

                    {logoutWarn ? (
                      <div className="logoutSuccess">
                        <div className="text-right">
                          <img src={static_images?.cross2} onClick={()=>setLogoutwarn(false)}/>
                        </div>
                        <h4>Logout</h4>
                        <p>You have successfully logged out.</p>
                      </div>
                    ) : null}
                  </div>
                </div>
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
