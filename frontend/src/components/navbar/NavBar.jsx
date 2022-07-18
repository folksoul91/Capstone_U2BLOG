import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.scss";

const NavBar = () => {
  const {user, dispatch} = useContext(Context);
  const handleLogout = ()=> {
    dispatch({type:"LOGOUT"})
  }
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
          <li className="navbarItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="navbarImg"
            src={user.profile}
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
