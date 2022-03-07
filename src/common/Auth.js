import Fetch from "../common/Fetch";

const localVar = "AUTH_TOKEN";
// const
class auth {
  constructor() {
    this.email = "";
  }

  /**
   *
   * @param {Object} info
   * @returns
   */
  // registerUser = (info) => {
  //   return Fetch(
  //     "auth/register",
  //     { ...info },
  //     { isToken: false, inFormData: false }
  //   ).then((res) => {
  //     // if(res?.success){
  //     // console.log("yesss");
  //     return res;
  //     // }
  //     // console.log({errors});
  //     // this.setState({errors: {...res?.data}});
  //   });
  // };

  checkUser = (callback) => {
    const token = localStorage.getItem(localVar);
    const info = JSON.parse(localStorage.getItem("temp"));
    if(token && info?.email) return {isLogin: true, info};
    return false;
  };

  setUser = (data, callback) => {
    let localObj = { ...data };
    delete localObj["createdAt"];
    delete localObj["updatedAt"];
    delete localObj["token"];
    localStorage.setItem(localVar, data?.token);
    localStorage.setItem("temp", JSON.stringify(localObj));
    if(callback){
      callback(true, localObj);
    }
  };

  loginUser = (info) => {
    return Fetch("auth/login", info).then((res) => {
      return res;
    });
  };

  

  logoutUser = () => {
    return Fetch("auth/logout", {}, { sendToken: true }).then((res) => {
      if (res?.status === 401) {
        window.handleToastMsg(true, "Something went wrong!");

        setTimeout(() => {
          window.handleToastMsg(false, "");
        }, 2000);

        return true;
      }

      if (res.success) {
        localStorage.removeItem("AUTH_TOKEN");
        window.handleToastMsg(true, res?.message);
        setTimeout(() => {
          window.handleToastMsg(false, "");
        }, 2000);
        return false;
      }
    });
  };

  refreshToken = () => {
    let loginToken = localStorage.getItem("AUTH_TOKEN");

    if (loginToken) {
      Fetch("auth/refresh", null, {
        method: "get",
        sendToken: true,
        token: loginToken,
      }).then((res) => {
        if (res.success) {
          localStorage.setItem("AUTH_TOKEN", loginToken);
          return res.data.token;
        }
      });
    }
  };

  handleLocalStorage = (key, setValue, action = "set") => {
    let localItem = JSON.parse(localStorage.getItem(key));
    if (action === "get") {
      return localItem;
    } else {
      let finalValue = JSON.stringify(setValue);
      localStorage.setItem(key, finalValue);
    }
  };
}

const Auth = new auth();

export default Auth;
