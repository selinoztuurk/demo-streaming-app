import React from "react";

const Footer = ({ title }) => {
  return (
    <div className={`down-menu ${title}`}>
      <div className="ui container">
        <ul className="nav bottom-nav pt-2">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item seperator">|</li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Terms and Conditions
            </a>
          </li>
          <li className="nav-item seperator">|</li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Privacy Policy
            </a>
          </li>
          <li className="nav-item seperator">|</li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Collection Statement
            </a>
          </li>
          <li className="nav-item seperator">|</li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Help
            </a>
          </li>
          <li className="nav-item seperator">|</li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Manage Account
            </a>
          </li>
        </ul>
      </div>
      <div className="ui container">
        <div className="d-block p-2 copyright">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </div>
      </div>
      <div className="ui container">
        <div className="d-flex bd-highlight logos">
          <div className="p-2 bd-highlight">
            <img src="/assets/social/facebook-white.svg" alt="" />
          </div>
          <div className="p-2 bd-highlight">
            <img src="/assets/social/twitter-white.svg" alt="" />
          </div>
          <div className="p-2 bd-highlight">
            <img src="/assets/social/instagram-white.svg" alt="" />
          </div>
          <div className="ml-auto p-2 bd-highlight">
            <img src="/assets/store/app-store.svg" alt="" />
          </div>
          <div className="p-2 bd-highlight">
            <img src="/assets/store/play-store.svg" alt="" />
          </div>
          <div className="p-2 bd-highlight">
            <img src="/assets/store/windows-store.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
