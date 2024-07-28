import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by</p>
        <div>
          <a href="https://www.linkedin.com/in/nisanurbayrak/">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaLinkedin style={{ fontSize: "18px" }} />
              <span style={{ paddingLeft: "2px" }}> Nisa Nur Bayrak</span>
            </div>
          </a>

          <a href="https://github.com/nisanurbayrak">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaGithub style={{ fontSize: "18px" }} />
              <span style={{ paddingLeft: "2px" }}> @nisanurbayrak</span>
            </div>
          </a>
        </div>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
