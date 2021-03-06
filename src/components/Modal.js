import React from "react";
import icons, {static_images} from "../common/Images";


export default function Modal({ data, closeCallback }) {
  return (
    // <div className="modal-bg">
    <div className="modal applicant">
      <div className="modal-container">
        <div className="modal-head flex align-center justify-space">
          <h2>Applicants for this job</h2>
          <img onClick={closeCallback} src={icons?.cross} alt="" />
        </div>

        <div className="">
          <h3>Total {data?.length} applications</h3>
          <div className="applicant-list">
            {data?.length ? (
              <ul className="flex align-center flex-wrap ">
                {data?.map((d, i) => (
                  <li key={i}>
                    <div className="applicant-list-item">
                      <div className="flex align-center">
                        <div className="letter">{d.name.charAt(0)}</div>
                        <div className="info">
                          <div className="name">{d.name}</div>
                          <div className="email">{d.email}</div>
                        </div>
                      </div>
                      <div className="skill">
                        <div className="skill-title">Skills</div>
                        <p>{d.skills}</p>
                      </div>
                    </div>
                  </li>
                ))}

                {/* <li>
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
                </li> */}
              </ul>
            ) : <div className="noJobs center"> <img src={static_images?.noJobs} alt=""/> <p>No applicants found</p></div>}
          </div>
        </div>
      </div>
      <div className="modal-bg" onClick={closeCallback}></div>
    </div>
    // </div>
  );
}
