import "./navbar.scss";

const NavBar = () => {
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
          <li className="navbarItem">HOME</li>
          <li className="navbarItem">ABOUT</li>
          <li className="navbarItem">CONTACT</li>
          <li className="navbarItem">WRITE</li>
          <li className="navbarItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="navbarImg"
          src="https://images.unsplash.com/photo-1559535332-db9971090158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default NavBar;
