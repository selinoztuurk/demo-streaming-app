import React from "react";

const UpperMenu = ({ title }) => {
  return (
    <div class="uppermenu">
      <nav class="navbar navbar-expand-sm navbar-dark bg-primary shadow-lg">
        <div className="ui container">
          <div class="mx-auto order-0">
            <a class="navbar-brand mx-auto" href="/">
              DEMO Streaming
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".dual-collapse2"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2 ">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link login" href="#" style={{ color: "white" }}>
                  Login
                </a>
              </li>
              <li class="nav-item nav-pills">
                <a
                  class="nav-link trial"
                  href="#"
                  style={{ color: "white", backgroundColor: "black" }}
                >
                  Start Your Free Trial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="titles">
        <nav class="navbar navbar-expand-sm bg-dark shadow-lg">
          <div className="ui container">
            <div class="order-0">
              <span class="navbar-brand mx-auto" style={{ color: "white" }}>
                Popular {title}
              </span>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target=".dual-collapse2"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default UpperMenu;
