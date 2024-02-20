

import { Link } from "react-router-dom";
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

import { useLocation } from "react-router-dom";
const HeaderNavEmployee = () => {
  const { pathname } = useLocation();
  return (
    <>
     <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          <li
            className={` dropdown`}
          >
            <Link to={"/employe"}>
            <span>Home</span>

            </Link>
           
          </li>
          {/* End homepage menu items */}


        
          {/* End findjobs menu items */}

          <li
            className={`dropdown`}
          >
            <Link to={'/candidates-list-v3'}>
           
            <span>Candidates</span>
            </Link>
           </li>
          <li
            className={`dropdown`}
          >
            <Link to={"/blog-list-v3"}>
            <span>Blog</span>
            </Link>
            
           
          </li>
         

          <li
            className={`]dropdown`}
          >
            <Link to={"/about"}>
            <span>About</span>
         </Link>
          </li>
          <li
            className={`dropdown`}
          >
            <Link to={"/contact"}>
            <span>Contact</span>
            </Link>
            
           
          </li>
          {/* End Pages menu items */}
        </ul>
      </nav> 
    </>
  );
};

export default HeaderNavEmployee;
