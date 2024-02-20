


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import HeaderNavEmployee from "../header/HeaderNavEmployee";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { pathname } = useLocation();
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-style-three -type-15 ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <Link to="/">
                <img
                
                  src="/images/logo.svg"
                  alt="brand"
                />
              </Link>
            </div>
          </div>
          {/* End .logo-box */}

         <HeaderNavEmployee/>         {/* <!-- Main Menu End--> */}
        </div>
        {/* End .nav-outer */}

        <div className="outer-box">
          {/* <!-- Login/Register --> */}
          <div className="btn-box">
            <Link
              to="/"
              className="theme-btn btn-style-one"
            >
              Job Search?
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
