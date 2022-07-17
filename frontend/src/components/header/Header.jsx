import "./header.css";
import mainpage from "../../assets/images/mainpage.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">Made with MERN</span>
        <span className="headerTitleLg">UBlog</span>
      </div>
      <img className="headerImg" src={mainpage} alt="" />
    </div>
  );
};

export default Header;
