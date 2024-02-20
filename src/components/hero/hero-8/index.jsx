  import { Link } from "react-router-dom";
  import SearchForm3 from "../../common/job-search/SearchForm3";

  import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className="banner-section-eight">
      <div className="image-outer">
        <figure className="image">
          <img

            src="/images/resource/banner-img-9.png"
            alt="banner image"
          />
        </figure>
      </div>
      {/* End image-outer */}

      <div className="auto-container">
        <div className="row">
          <div className="content-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInUp" data-aos="fade-up">
              <div className="title-box">

                <h3>Identify the ideal candidate swiftly.</h3>
                <div className="text">
                  Streamline Hiring: Find Your Perfect Fit Fast!

                </div>
              </div>
              {/* End title box */}

              <div
                className="job-search-form"
                data-aos-delay="700"
                data-aos="fade-up"
              >
                <form onClick={handleSubmit}>
                  <div className="row">
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
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* <!-- Job Search Form --> */}

              {/* End .bottom-box */}
            </div>
            {/* End inner-column */}
          </div>
          {/* End .content-column */}
        </div>
        {/* <!-- Job Search Form --> */}
      </div>
    </section>
  );
};

export default index;
