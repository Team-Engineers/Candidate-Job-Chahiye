import Header from "./Header";
import Footer from "./Footer";
import Hero5 from "../hero/hero-5";
import JobFilterTab from "../job-featured/JobFilterTab";
import TopCompany from "../top-company/TopCompany";
import Blog from "../blog/Blog";
import Partner from "../common/partner/Partner";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";
import FeaturedBlock from "../block/FeaturedBlock";
import Block8 from "../block/Block8";
import { Link } from "react-router-dom";
import LoginRegBanner from "../block/LoginRegBanner";
import Testimonial2 from "../testimonial/Testimonial2";
import JobCategorie3 from "../job-categories/JobCategorie3";
import JobFilterTab2 from "../job-featured/JobFilterTab2";
import CallToAction11 from "../call-to-action/CallToAction11";

const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero5 />
      {/* <!-- End Banner Section--> */}
      <section className="layout-pt-120 layout-pb-120">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>How It Works</h2>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </div>
          </div>
          <div className="row grid-base pt-50" data-aos="fade-up">
            <Block8/>
          </div>
        </div>
      </section>
    
      <section className="job-section bg-light-blue layout-pt-120 layout-pb-120">
        <div className="bg-shape -top -left js-rellax">
          <img
          
            src="/images/index-11/shapes/2.png"
            alt="image"
          />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Featured Jobs</h2>
            <div className="text">
              Know your worth and find the job that qualify your life
            </div>
          </div>
          {/* End .sec-title */}

          <div className="row" data-aos="fade-up">
            <JobFilterTab2 />
          </div>
          <div className="btn-box">
            <Link
              to="/job-list-v1"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Load More Listing</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* <!-- End Job Section --> */}
      <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popular Job Categories</h2>
            <div className="text">2020 jobs live - 293 added today.</div>
          </div>
          {/* End sec-title */}
          <div className="row" data-aos="fade-up">
            <JobCategorie3 />
          </div>
          {/* End .row */}
        </div>
      </section>
     
      {/* <!-- End Process Section --> */}

      {/* <LoginRegBanner /> */}
      {/* <section className="features-section">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Featured Cities</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>

          <div className="row" data-aos="fade-up">
            <FeaturedBlock />
          </div>
        </div>
      </section> */}
      <section className="top-companies style-two">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Top Company Registered</h2>
            <div className="text">
              Some of the companies we have helped recruit excellent applicants
              over the years.
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            <div className="companies-carousel">
              <TopCompany />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Top Companies --> */}

      <section className="clients-section alternate">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}
      <section className="testimonial-section-two">
        <div className="container-fluid">
          <div className="testimonial-left">
            <img
            
              src="/images/resource/testimonial-left.png"
              alt="testimonial"
            />
          </div>
          {/* End left img group */}

          <div className="testimonial-right">
            <img
             
              src="/images/resource/testimonial-right.png"
              alt="testimonial"
            />
          </div>
          {/* End right img group */}

          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
          {/* <!-- Sec Title --> */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="testimonial-carousel">
              <Testimonial2 />
            </div>
            {/* <!-- Testimonial Carousel --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Section --> */}

    
      {/* End Job Categorie Section */}
     
      <section className="news-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            <div className="text">
              Fresh job related news content posted each day.
            </div>
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}
      <CallToAction11 />

     
      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
