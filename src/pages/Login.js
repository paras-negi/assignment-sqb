import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import icons from "../common/Images";
import MainLayout from "../layouts/MainLayout";
import Auth from "../common/Auth";
import { isEmail } from "validator";
import { withContext } from "../context/Context";
// import Fetch from "../common/Fetch";

const { logo, home_main } = icons;

function Login({context: {updateLoginInfo}}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });


  const [errMsg, setErrMsg] = useState({})

  const handleChange = (_evt) => {
    const { name, value } = _evt.target;

    setUserInfo({ ...userInfo, [name]: value });

    if (name === "email") {
      if (isEmail(value)) {
        setError({ ...error, [name]: "" });
      } else {
        setError({ ...error, [name]: "Please enter valid email address" });
      }
      return;
    }

    if (value?.length < 6) {
      setError({
        ...error,
        [name]: "Password must be greater than 6 characters.",
      });
    } else {
      setError({ ...error, [name]: "" });
    }

    return;
  };

  const onSubmit = (_evt) => {
    _evt.preventDefault();

    // for (let key in error) {
    //   if(!userInfo[key]?.trim()?.length){
    //     error[key] = `${key} can't be empty`
    //   }

    //   if (error[key]) {
    //     console.log(error[key]);
    //     // return;
    //   }
    // }

    const { email, password } = userInfo;

    setLoading(true);

    Auth.loginUser({ email, password }).then((res) => {
      setLoading(false);
      if (res?.success) {
        Auth.setUser(res?.data, updateLoginInfo);
        navigate("/");
        return;
      }

      res?.errors?.map((d) => {
        setError(d);
      });
      return;
    });
  };

  return (
    <MainLayout loading={false} footer={false} authRequired={false} loginPage>
      <div className="">
        <div className="login">
          <div className="container">
            <div className="login-container">
              <h2>Login</h2>

              <form className="form" onSubmit={onSubmit} method="POST">
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className={
                      error["email"]
                        ? "form-control red-border"
                        : "form-control"
                    }
                    name="email"
                    onChange={handleChange}
                  />

                  <p className="f14 errMsg mt1">{error["email"]}</p>
                </div>

                <div className="form-group">
                  <label>
                    Password <a href="">Forgot your password?</a>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Password"
                    className="form-control"
                    name="password"
                    className={
                      error["password"]
                        ? "form-control red-border"
                        : "form-control"
                    }
                    onChange={handleChange}
                  />

                  <p className="f14 errMsg mt1">{error["password"]}</p>
                </div>

                <p className="f14 errMsg mt1 text-right">{error["password"] || error["email"]}</p>

                <div className="form-group center">
                  <input
                    type="submit"
                    value={loading ? "wait.." : "Login"}
                    className="btn-theme"
                  />
                </div>

                <div className="text center">
                  New to MyJobs? <a>Create an account</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default withContext(Login);
