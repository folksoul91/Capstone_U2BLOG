import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="navIcon fa-brands fa-facebook"></i>
        <i className="navIcon fa-brands fa-github"></i>
        <i className="navIcon fa-brands fa-linkedin"></i>
        <i className="navIcon fa-brands fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="navbarItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navbarItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="navbarItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="navbarItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="navbarItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="navbarImg"
            src="https://images.unsplash.com/photo-1559535332-db9971090158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="navbarItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navbarItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default NavBar;
