

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
const HeaderNavContent = () => {
  const { pathname } = useLocation();
  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          <li
            className={` dropdown`}
          >
            <Link to={"/"}>
            <span>Home</span>

            </Link>
           
          </li>
          {/* End homepage menu items */}

          <li
            className={` dropdown has-mega-menu`}
            id="has-mega-menu"
          >
            <Link to={"/jobs"}>
            <span>Find Jobs</span>
            </Link>
          
          </li>
        
          {/* End findjobs menu items */}

          <li
            className={`dropdown`}
          >
            <Link to={'/employers-list-v3'}>
           
            <span>Companies</span>
            </Link>
            {/* <ul>
              {employerItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, pathname)
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, pathname)
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link to={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li
                className={
                  pathname?.includes("/employers-dashboard")
                    ? "current"
                    : ""
                }
              >
                <Link to="/employers-dashboard/dashboard">
                  Employers Dashboard
                </Link>
              </li>
            </ul> */}
          </li>
          {/* End Employers menu items */}

          {/* <li
            className={`${
              isActiveParent(candidateItems, pathname) ||
              pathname?.split("/")[1] === "candidates-dashboard"
                ? "current"
                : ""
                ? "current"
                : ""
            } dropdown`}
          >
            <span>Candidates</span>
            <ul>
              {candidateItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, pathname)
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, pathname)
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link to={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li
                className={
                  pathname?.includes("/candidates-dashboard/")
                    ? "current"
                    : ""
                }
              >
                <Link to="/candidates-dashboard/dashboard">
                  Candidates Dashboard
                </Link>
              </li>
            </ul>
          </li> */}
          {/* End Candidates menu items */}

          <li
            className={`dropdown`}
          >
            <Link to={"/blog-list-v1"}>
            <span>Blog</span>
            </Link>
            
           
          </li>
          <li
            className={`dropdown`}
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

export default HeaderNavContent;
