import React from "react";
import icons from "../common/Images";

const { logo, home_main, location, home, cross, no_jobs } = icons;

export default function Modal({ children }) {
  return (
    // <div className="modal-bg">
      <div className="modal applicant">
        <div className="modal-container">
          <div className="modal-head flex align-center justify-space">
            <h2>Applicants for this job</h2>
            <img src={cross} />
          </div>
          <div className="">
            <h3>Total 35 applications</h3>
            <div className="applicant-list">
              <ul className="flex align-center flex-wrap ">
                <li>
                  <div className="applicant-list-item">
                    <div className="flex align-center">
                      <div className="letter">e</div>
                      <div className="info">
                        <div className="name">Eliza Lucas</div>
                        <div className="email">abc123@email.com</div>
                      </div>
                    </div>
                    <div className="skill">
                      <div className="skill-title">Skills</div>
                      <p>Coding, designing, graphics, website, app ui</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="applicant-list-item">
                    <div className="flex align-center">
                      <div className="letter">e</div>
                      <div className="info">
                        <div className="name">Eliza Lucas</div>
                        <div className="email">abc123@email.com</div>
                      </div>
                    </div>
                    <div className="skill">
                      <div className="skill-title">Skills</div>
                      <p>Coding, designing, graphics, website, app ui</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="applicant-list-item">
                    <div className="flex align-center">
                      <div className="letter">e</div>
                      <div className="info">
                        <div className="name">Eliza Lucas</div>
                        <div className="email">abc123@email.com</div>
                      </div>
                    </div>
                    <div className="skill">
                      <div className="skill-title">Skills</div>
                      <p>Coding, designing, graphics, website, app ui</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}
