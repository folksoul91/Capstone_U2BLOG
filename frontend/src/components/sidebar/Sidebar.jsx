import ProfilePic from "../../assets/images/profile1.jpg";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quae quis dolor sequi?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Travel</li>
          <li className="sidebarListItem">Movies</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Others</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
