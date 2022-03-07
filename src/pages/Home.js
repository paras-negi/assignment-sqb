import React, { Component } from "react";
import Link from "../common/Link"
import MainLayout from "../layouts/MainLayout";

import Card from "../components/Card";
import icons from "../common/Images";


const { logo, home_main, location, home, cross } = icons;

export default class Home extends Component {
  state = {
    isLoading: false,
  };

  componentDidMount(){
    // console.log(Navigate);
  }

  render() {
    return (
      <MainLayout loading={false} footer={true} authRequired={false}>
        <div className="">
          <section className="homeMain bg-dark">
            <section className=" home-top ">
              <div className="container flex justify-space">
                <div className="home-top__left">
                  <h3>Welcome to</h3>
                  <h3>
                    <span>My</span>
                    <span className="logo-blue">Jobs</span>
                  </h3>
                  {/* <img src={logo} alt="" /> */}
                  <div className="mt4">
                    {" "}
                    <Link href="/jobs" type="button" className="btn-blue f14">
                      Get Started
                    </Link>{" "}
                  </div>
                </div>

                <div className="home-top__right">
                  <div className="home-top__right--img">
                    <img src={home_main} alt=""></img>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section className="home-bottom p-main bg-light">
            <div className="container">
              {" "}
              <h4>Why Us</h4>
              <div className="home-bottom__features mt3 flex justify-space flex-wrap">
                <Card
                  heading={{
                    font_size: "f22",
                    text: "Get More Visibility",
                    class: "txt-blue",
                  }}
                  content={{
                    font_size: "f14",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                  }}
                />
                <Card
                  heading={{
                    font_size: "f22",
                    text: "Organize Your Candidates",
                    class: "txt-blue",
                  }}
                  content={{
                    font_size: "f14",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  }}
                />
                <Card
                  heading={{
                    font_size: "f22",
                    text: "Verify Their Abilities",
                    class: "txt-blue",
                  }}
                  content={{
                    font_size: "f14",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    );
  }
}
