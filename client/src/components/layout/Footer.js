import React from "react";

function Footer() {
  return (
    <div className="main">
      <div className="footer__container">
        <div className="row">
          {/*Column 1*/}
          <div className="col-md-3 col-sm-6">
            <h4 className="header-title">About Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/ourgoal" target="_blank" rel="noopener noreferrer">
                  Our Goal
                </a>
              </li>
              <li>
                <a href="/ourvision" target="_blank" rel="noopener noreferrer">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="oursponsor" target="_blank" rel="noopener noreferrer">
                  Our Sponsor
                </a>
              </li>
              <li>
                <a href="/press" target="_blank" rel="noopener noreferrer">
                  Press
                </a>
              </li>
            </ul>
          </div>
          {/*Column 2*/}
          <div className="col-md-3 col-sm-6">Social Media</div>
          <ul className="list-unstyled">
            <li>
              <a
                href="https://facebook.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram-square">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </a>
            </li>
            <li>
              <a
                href="http://twitter.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </a>
            </li>
          </ul>
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <li>
                <a href="/contactUs" className="link">
                  contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
