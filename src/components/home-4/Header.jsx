


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderNavContent from "../header/HeaderNavContent";


const Header = () => {
  const [navbar, setNavbar] = useState(false);

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
      className={`main-header header-style-three  ${
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

          <HeaderNavContent />
          {/* <!-- Main Menu End--> */}
        </div>
        {/* End .nav-outer */}

        <div className="outer-box">
          {/* <!-- Add Listing --> */}
          <Link to="/candidates-dashboard/cv-manager" className="upload-cv">
            Upload your CV
          </Link>
          {/* <!-- Login/Register --> */}
          <div className="btn-box">
          <Link
              to="/login"
              className="theme-btn btn-style-three call-modal"
            >
             
              Login / Register
              </Link>
            <Link
              to="/employe"
              className="theme-btn btn-style-seven"
            >
              Employe Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
