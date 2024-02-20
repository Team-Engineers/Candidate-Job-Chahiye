
import React, { useState } from "react";
import axios from "axios";

import Map from "../../../Map";
import Select from "react-select";



const PostBoxForm = () => {


  const [formData, setFormData] = useState({
    jobTitle: "",
    department: "",
    category: "",
    jobType: "",
    vacancies: -1,
    workLocation: "",
    officeAddres: "",
    minSalary: -1,
    maxSalary: -1,
    depositRequired: false,
    educationRequired: "",
    skillsRequired: [],
    experienceYears: -1,
    speakingLevel: "",
    age: -1,
    genderPreference: "",
    interviewTypes: [],
    deadline: "",
    company_id: "65cbbecf61923daa96a222a1",
  });



  const specialisms = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  const jobTypeOptions = [
    { value: "Full_Time", label: "Full Time" },
    { value: "Part_Time", label: "Part Time" },
    { value: "INTERN", label: "INTERN" },

    // ... other options
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.split(",") });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)

    try {
      const response = await axios.post(
        "http://localhost:8080/api/jobPost/create",
        formData
      );

      console.log("API Response:", response.data);
      // Handle success, redirect, or show a success message
    } catch (error) {
      console.error("API Error:", error.response.data);
      // Handle error, show an error message, etc.
    }
  };


  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Job Title</label>
          <input type="text" name="jobTitle" placeholder="Title" onChange={handleInputChange} required />
        </div>

        {/* <!-- About Company --> */}
        {/* <div className="form-group col-lg-12 col-md-12">
          <label>Job Description</label>
          <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div> */}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Department</label>
          <input type="text" name="department" placeholder="" onChange={handleInputChange} required/>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Category</label>
          <input type="text" name="category" placeholder="" onChange={handleInputChange} required />
        </div>

        {/* <!-- Search Select --> */}

        <div className="form-group col-lg-6 col-md-12">
          <label>Job Type</label>
          <select
            className="chosen-single form-select"
            name="jobType"
            onChange={handleInputChange}
            required
          >
            <option>FULL_TIME</option>
            <option>PART_TIME</option>
            <option>INTERN</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Vacancies</label>
          <input
            type="number"
            name="vacancies"
            placeholder=""
            // value={formData.offeredSalary}
            onChange={handleInputChange}
          />
        </div>


        <div className="form-group col-lg-6 col-md-12">
          <label>Work Location</label>
          <select
            className="chosen-single form-select"
            name="workLocation"
            onChange={handleInputChange}
            required
          >
            <option>ON_SITE</option>
            <option>REMOTE</option>
            <option>HYBRID</option>
          </select>
        </div>


        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Specialisms </label>
          <Select
            defaultValue={[specialisms[2]]}
            isMulti
            name="colors"
            options={specialisms}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Job Type</label>
          <select
            className="chosen-single form-select"
            name="jobType"
            onChange={handleInputChange}
          >
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div> */}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Salary Type</label>
          <select
            className="chosen-single form-select"
            name="salaryType"
            onChange={handleInputChange}
            required
          >
            <option>Select</option>
            <option>FIXED</option>
            <option>INCENTIVE</option>
            <option>UNPAID</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Min salary</label>
          <input
            type="number"
            name="minSalary"
            placeholder=""
            min={0}
            // value={formData.offeredSalary}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Max salary</label>
          <input
            type="number"
            name="maxSalary"
            placeholder=""
            min={0}
            // value={formData.offeredSalary}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
        <label>Deposit Required:</label>
        <input
          type="checkbox"
          name="depositRequired"
          checked={formData.depositRequired}
          onChange={handleCheckboxChange}
        />
      </div>

      <div className="form-group col-lg-12 col-md-12">
          <label>Education Required</label>
          <input type="text" name="educationRequired" placeholder="education required" onChange={handleInputChange} />
        </div>




        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Career Level</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div> */}

        <div className="form-group col-lg-6 col-md-12">
          <label>Experience Years</label>
          <input
            type="number"
            name="experienceYears"
            placeholder=""
            min={0}
            // value={formData.offeredSalary}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Speaking Level</label>
          <select
            className="chosen-single form-select"
            name="speakingLevel"
            onChange={handleInputChange}
          >
            <option>NATIVE</option>
            <option>PROFESSIONAL</option>
            <option>FLUENT</option>
            <option>BASIC</option>
          </select>
        </div>


        <div className="form-group col-lg-6 col-md-12">
          <label>age</label>
          <input
            type="number"
            name="age"
            placeholder=""
            // value={formData.offeredSalary}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Gender Preference</label>
          <select
            className="chosen-single form-select"
            name="genderPreference"
            onChange={handleInputChange}
          >
            <option>MALE</option>
            <option>FEMALE</option>
            <option>GENDER_NEUTRAL</option>
            <option>NONE</option>
          </select>
        </div>


        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Industry</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Qualification</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div> */}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Application Deadline Date</label>
          <input type="date" name="deadline" placeholder="06.04.2020" onChange={handleInputChange} required/>
        </div>

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Country</label>
          <select className="chosen-single form-select">
            <option>Australia</option>
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div> */}

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-6 col-md-12">
          <label>City</label>
          <select className="chosen-single form-select">
            <option>Melbourne</option>
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div> */}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Complete Address</label>
          <input
            type="text"
            name="officeAddress"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
          />
        </div>

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Find On Map</label>
          <input
            type="text"
            name="name"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
          />
        </div> */}

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-3 col-md-12">
          <label>Latitude</label>
          <input type="text" name="name" placeholder="Melbourne" />
        </div> */}

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-3 col-md-12">
          <label>Longitude</label>
          <input type="text" name="name" placeholder="Melbourne" />
        </div> */}

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-12 col-md-12">
          <button className="theme-btn btn-style-three">Search Location</button>
        </div> */}

        {/* <div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div> */}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12 text-right">
          <button className="theme-btn btn-style-one">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default PostBoxForm;
