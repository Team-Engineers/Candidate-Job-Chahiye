import SearchForm from "../../common/job-search/SearchForm";
import ImageBox from "./ImageBox";
import PopularSearch from "../PopularSearch";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
const index = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className="banner-section-six">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div
              className="inner-column"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="title-box">
                <h3>
                Identify the ideal candidate swiftly. <br />
                  
                </h3>
                <div className="text">
                Streamline Hiring: Find Your Perfect Fit Fast!
                </div>
              </div>

              {/* <!-- Job Search Form --> */}
              <div
                className="job-search-form"
                data-aos-delay="700"
                data-aos="fade-up"
              >
                <form onClick={handleSubmit}>
  <div className="row">
    <h2>Employer Login/Sign Up</h2>

    {/* <!-- Form Group --> */}
    <div className="form-group col-lg-12 col-md-12 col-sm-12">
      <span className="icon flaticon-user"></span>
      <input
        type="text"
        name="username"
        placeholder="Username"
      />
    </div>

    {/* <!-- Form Group --> */}
    <div className="form-group col-lg-12 col-md-12 col-sm-12">
      <span className="icon flaticon-lock"></span>
      <input
        type="password"
        name="password"
        placeholder="Password"
      />
    </div>

    {/* <!-- Form Group --> */}
    <div className="form-group col-lg-12 col-md-12 col-sm-12">
      <span className="icon flaticon-phone"></span>
      <input
        type="tel"
        name="mobile_number"
        placeholder="Enter your mobile number"
      />
    </div>

    {/* <!-- Form Group --> */}
    <div className="form-group col-lg-12 col-md-12 col-sm-12 text-center">
      <button
        type="submit"
        className="theme-btn btn-style-one"
        onClick={() => navigate("/employers-dashboard/dashboard")}
      >
        Login
      </button>
    </div>
  </div>
</form>

              </div>
              {/* <!-- Job Search Form --> */}

              {/* <!-- Popular Search --> */}
              <PopularSearch />
              {/* <!-- End Popular Search --> */}
            </div>
          </div>
          {/* End .col */}

          <div className="image-column col-lg-5 col-md-12">
            <ImageBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
