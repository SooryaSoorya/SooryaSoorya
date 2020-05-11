import React, { Component, useRef } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'



import { navLinkList } from "../../../models/nav-link-data";

const TopItem: React.FC = () => {
  return (
    <ul>
      {navLinkList.map((item) => (
        <li key={item.name}>
          <span>
            <BrowserRouter>
              <Link to="/" className="item">
                {/* <FontAwesomeIcon
                  className={item.icon}
                  icon={item.icon}
                  size="lg"
                /> */}
               <FontAwesomeIcon icon={faCodeBranch} />
                {item.name}
              </Link>
            </BrowserRouter>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TopItem;
