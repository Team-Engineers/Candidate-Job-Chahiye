import SearchForm2 from "@/components/footer/SearchForm2";
import SearchForm3 from "../../common/job-search/SearchForm3";
import Funfact3 from "../../fun-fact-counter/Funfact3";
import SearchForm from "@/components/footer/SearchForm";
import SearchForm5 from "@/components/common/job-search/SearchForm5";

const index = () => {
  return (
    <section
      className="banner-section -type-15"
      style={{ backgroundImage: "url(/images/index-15/header/bg.png)" }}
    >
      <div className="auto-container">
        <div className="cotnent-box">
          <div className="title-box" data-wow-delay="300" data-aos="fade-up">
            <h3>Identify the ideal candidate swiftly.</h3>
            <div className="text">
              Streamline Hiring: Find Your Perfect Fit Fast!
                        </div>
          </div>
          {/* End title-box */}

          <div
            className="job-search-form"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <SearchForm5 btnStyle="btn-style-two" />
          </div>
          {/* <!-- Job Search Form --> */}

          <div className="fun-fact-section">
            <div className="row">
              {/* <!--Column--> */}
              <Funfact3 />
            </div>
          </div>
          {/* <!-- Fun Fact Section --> */}
        </div>
        {/* End content-box */}
      </div>
    </section>
    // <!-- End Banner Section-->
  );
};

export default index;
