import logo from "../../images/Iam_Tuse.jpg";
import Counter from "../Counter";
import Planet from "../Planet";
import User from "../User";
import MasterFooter from "./MasterFooter";
import Form from "../Form";
import PhoneBook from "../PhoneBook";
import MasterBody from "./MasterBody";

const MasterHeader = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark fixed-top"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              className="img-fluid rounded-circle"
              src={logo}
              style={{ verticalAlign: "Top", width: "35px" }}
            />
            dadwonkulahjr&#128187;
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About Me
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </li> */}
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
      <MasterBody />
    </>

    // <div
    //   className="container-fluid py-2"
    //   style={{
    //     backgroundColor: "black",
    //     minHeight: "85vh",
    //   }}
    // >
    //   <img
    //     src={logo}
    //     style={{ width: "35px", verticalAlign: "top" }}
    //     alt=""
    //     className="img-fluid rounded-circle"
    //   />
    //   <span className="h2 text-white-50">tuseTheProgrammer</span>
    //   <div style={{ borderBlock: "1px solid #555", width: "100%" }}></div>
    //   <div className="container-fluid mb-2">
    //     <MasterBody />
    //   </div>
    // </div>
  );
};

export default MasterHeader;
