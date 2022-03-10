import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import styled from "styled-components";
import "./Style.css";
import $ from 'jquery';

function Header() {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    return (
      <p className="text">
        {isReadMore ? text.slice(0, 250) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          <strong>{isReadMore ? "   ... Read More" : " Show Less"} </strong>
        </span>
      </p>
    );
  };

 

  return (
    <div class="container-fluid">
      <nav class="navbar navbar-light bg-light mx-auto">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="./images/logo2.svg" alt="" width="200" height="80" />
          </a>
          <NavMenu>
            <a>
              <SearchIcon />
              <span>Search</span>
            </a>
            <a>
              <PermIdentityIcon />
              <span>Login</span>
            </a>
          </NavMenu>
        </div>
      </nav>
      <hr class="dropdown-divider" />
      <div className="row">
        <ul class="nav nav-tabs justify-content-center">
          {/* ====== First menu Starts ====== */}
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Discover
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
         {/*===================== First Menu ends =============== */}
          {/* ====== Second menu Starts ====== */}
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Book flight Ticket
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
         {/*===================== Second Menu ends =============== */}
          {/* ====== Third menu Starts ====== */}
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Discover
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
         {/*===================== Third Menu ends =============== */}
         {/* ====== Fourth menu Starts ====== */}
         <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
               Manage
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
         {/*===================== Fourth Menu ends =============== */}
         <hr class="dropdown-divider" />
        </ul>
      </div>
      <div className="row mx-auto ">
        <WarningMenu>
          <div class="card text-center border-primary">
            <div class="card-body">
              <h5 class="card-title">Warning !</h5>
              <p class="card-text">
                <ReadMore>
                  You must check if you are eligible to travel from India.
                  Indian nationals, regardless of foreign residency status, can
                  only travel from India to the UK, Ireland and Cayman Islands
                  and must hold a valid visa. India nationals cannot travel
                  further to any other countries, unless their spouse is a
                  foreign national or they are a seaman travelling with
                  authorised documentation from the Ministry of Shipping. You
                  will not be allowed to board your flight if you do not meet
                  these requirements. If you’d like to talk, please call us on
                  our International Toll Free number 0008004401060 or contact
                  your travel agent. Due to COVID-19, we are currently working
                  with limited capacity.Thanks for bearing with us.
                </ReadMore>
              </p>
            </div>
            <div class="card-footer text-muted">
              As per Ministry of Aviation, Government of India
            </div>
          </div>
        </WarningMenu>
      </div>
    </div>
  );
}

export default Header;

const NavMenu = styled.div`
  display: flex;
  margin-left: 0.6;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    span {
      font-size: 15px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: blue;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -10px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 280ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &: hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const WarningMenu = styled.div`
  width:100%;
  background-color: lightgrey;
  cursor: pointer;
  padding: 20px 20px;
`;
