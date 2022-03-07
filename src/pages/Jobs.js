import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
  import icons, {static_images} from "../common/Images";

  import Fetch from "../common/Fetch";
  import Button from "../common/Link";

  const { logo, home_main, location, home, cross,  } = icons;
  const {noJobs} = static_images;
export default class Home extends Component {
  state = {
    isLoading: false,
    jobList: [],
    page: 1,

    jobListObj: { 1: [] },
    paginationArr: [],

    modal: { show: false, loading: false, data: [] },
  };

  componentDidMount() {
    Fetch("recruiters/jobs", {}, { method: "get", sendToken: true }).then(
      (res) => {
        if (res?.success) {
          let totat_count = Number(res?.data?.metadata?.count);
          let limit = Number(res?.data?.metadata?.limit);

          let totalPages = Math.round(totat_count / limit);
          let tempArr = [];

          for (let i = 0; i < totalPages; i++) {
            tempArr.push(i + 1);
          }

          // let countPerPage = Math.round(limit / totalPages);
          // console.log(Math.round(totat_count / limit));

          this.setState({
            jobListObj: { 1: res?.data?.data },
            isLoading: false,
            paginationArr: tempArr,
          });
        }
      }
    );
  }

  fetchJobs = (page) => {
    const { jobListObj } = this.state;

    if (jobListObj[page]?.length) {
      this.setState({ page });
      return;
    }

    this.setState({ isLoading: true });

    let copy = { ...jobListObj };

    Fetch(
      `recruiters/jobs?page=${page}`,
      {},
      { method: "get", sendToken: true }
    ).then((res) => {
      if (res?.success) {
        copy[page] = res?.data?.data;
        this.setState({ isLoading: false, page: page, jobListObj: copy });
      } else {
        this.setState({ isLoading: false, page: page - 1, jobListObj: copy });
      }
    });
  };

  viewJobApplicants = (id) => {
    this.setState({ modal: { ...this.state.modal, loading: true } });
    Fetch(
      `recruiters/jobs/${id}/candidates`,
      {},
      { method: "get", sendToken: true }
    ).then((res) => {
      if (res?.success) {
        this.setState({
          modal: { show: true, data: res?.data, loading: false },
        });
        return;
      } else {
        this.setState({
          modal: { ...this.state.modal, show: true, loading: false },
        });
      }
    });
  };

  closeModal = () => {
    this.setState({ modal: { show: false, data: [] } });
  };

  render() {
    const { isLoading, jobListObj, page, paginationArr, modal } = this.state;

    return (
      <MainLayout
        loading={isLoading}
        footer={false}
        authRequired
        modal={{
          show: modal?.show,
          loading: modal?.loading,
          data: modal?.data,
          closeCallback: this.closeModal,
        }}
      >
        {/* job posting */}
        <div className="jobPosted bg-light">
          <div className="container ">
            <div className="breadcrumb">
              <a href="/">
                <img src={home} alt="" /> Home
              </a>
            </div>

            <h1>Jobs posted by you</h1>

            {jobListObj?.[page]?.length ? (
              <React.Fragment>
                <ul className="jobPosted-list flex flex-wrap">
                  {jobListObj?.[page]?.map((d, i) => (
                    <li key={i}>
                      <div className="jobPosted-list-item">
                        <h3>{d.title}</h3>
                        <p>{d.description}</p>
                        <div className="flex justify-space align-center">
                          <div className="location flex align-center">
                            <img src={location} alt="" />
                            {d.location}
                          </div>

                          <button onClick={()=>this.viewJobApplicants(d.id)}>View</button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="pagination flex mt3">
                  {paginationArr?.length ? (
                    <ul className="pagination-count flex justify-space">
                      <li className="btn">{"<"}</li>
                      {paginationArr?.map((d, i) => (
                        <li
                          key={i}
                          className={
                            page === d
                              ? "cursor-pointer active"
                              : "cursor-pointer"
                          }
                          onClick={() => this.fetchJobs(d)}
                        >
                          {d}
                        </li>
                      ))}
                      <li className="btn">{">"}</li>
                    </ul>
                  ) : null}
                </div>
              </React.Fragment>
            ) : (
              <div className="center noJobs">
                <div className="">
                  <img src={noJobs} alt=""/>
                </div>{" "}
                <p>Your posted jobs will show here!</p>
              </div>
            )}
          </div>
        </div>
      </MainLayout>
    );
  }
}
