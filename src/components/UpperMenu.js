import React from "react";

const UpperMenu = ({ title }) => {
  return (
    <div className="uppermenu">
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary shadow-lg">
        <div className="ui container">
          <div className="mx-auto order-0">
            <a className="navbar-brand mx-auto" href="/">
              DEMO Streaming
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".dual-collapse2"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 ">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link login"
                  href="/"
                  style={{ color: "white" }}
                >
                  Login
                </a>
              </li>
              <li className="nav-item nav-pills">
                <a
                  className="nav-link trial"
                  href="/"
                  style={{ color: "white", backgroundColor: "black" }}
                >
                  Start Your Free Trial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="titles">
        <nav className="navbar navbar-expand-sm bg-dark shadow-lg">
          <div className="ui container">
            <div className="order-0">
              <span className="navbar-brand mx-auto" style={{ color: "white" }}>
                Popular {title}
              </span>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target=".dual-collapse2"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default UpperMenu;
