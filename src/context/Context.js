import React, { Component, createContext } from "react";
import Auth from "../common/Auth";
import Fetch from "../common/Fetch";

const MainContext = createContext();

export default class Context extends Component {
  state = {
    isLoading: false,
    // authLoading: false,
    isUserLogin: true,
    userInfo: { email: "", name: "", skills: "", id: "" },
  };

  componentDidMount() {
    const login = Auth.checkUser();

    if (typeof login === "object") {
      const { isLogin, info } = login;
      this.setState({ isUserLogin: isLogin, userInfo: info });
      return;
    }

    this.setState({ isUserLogin: login });
    return;
  }

  updateLoginInfo = (bool, obj) => {
    this.setState({ isUserLogin: bool, userInfo: obj });
  };

  onUserLogout = () => {
    const checkLogin = Auth.logoutUser();
    this.updateLoginInfo(false, { email: "", name: "", skills: "", id: "" });
  };

  render() {
    return (
      <MainContext.Provider
        value={{
          ...this.state,
          updateLoginInfo: this.updateLoginInfo,
          logoutUser: this.onUserLogout,
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export const withContext = (Components) => (props) => {
  return (
    <MainContext.Consumer>
      {(value) => <Components context={value} {...props} />}
    </MainContext.Consumer>
  );
};
