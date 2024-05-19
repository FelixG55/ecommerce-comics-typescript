import { Link } from "react-router-dom";
import logo from "../assets/front.png";
import CartWidget from "./CartWidget";
import "../assets/css/navBar.css";

function NavBar() {
  return (
    <div className="container-fluid p-0 position-relative">
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand" >
            <img src={logo} alt="" width={100} />
          </Link>
          <button
            className="navbar-toggler m-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            
          </div>
          
          <div
            className="collapse navbar-collapse m-auto flex-grow-0"
            id="navbarSupportedContent"
          >
            <div
            className="image-right"
            style={{
              backgroundImage: "url('logo2.svg')",
              backgroundSize: "100px 100px", // Ancho de la imagen y auto para el alto
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "100px",
              width: "200px",
            }}
          ></div>
            <div className="image-bg">
              <ul className="navbar-nav mb-lg-0 mt-lg-4 ms-lg-5">
                <li className="nav-item ms-lg-4">
                  <Link to={'/'} className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Eventos
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Productos
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{ backgroundColor: "#FFCC0C" }}
                  >
                    <li>
                      <Link to={'/category/Comics'} className="dropdown-item" >
                        Comics
                      </Link>
                    </li>
                    <li>
                      <Link to={'/category/Merchandaising'} className="dropdown-item" >
                        Merchandaising
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          <div
            className="image-right ms-5 "
            style={{
              backgroundImage: "url('logo.svg')",
              backgroundSize: "100px 100px", // Ancho de la imagen y auto para el alto
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              height: "100px",
              width: "200px",
            }}
          ></div>
          </div>
        </div>
       <CartWidget/>
      </nav>
    </div>
  );
}

export default NavBar;
