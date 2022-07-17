import BodyPic from "../../assets/images/travel2.jpg";
import "./singlePost.scss";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={BodyPic} alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Kim</b>
          </span>
          <span className="singlePostAuthor">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam
          quos aspernatur rerum rem consequatur voluptatum consequuntur quasi
          temporibus! Libero officiis nesciunt id voluptatibus minus nulla
          itaque incidunt voluptates est. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Sapiente nam quos aspernatur rerum rem
          consequatur voluptatum consequuntur quasi temporibus! Libero officiis
          nesciunt id voluptatibus minus nulla itaque incidunt voluptates est.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam
          quos aspernatur rerum rem consequatur voluptatum consequuntur quasi
          temporibus! Libero officiis nesciunt id voluptatibus minus nulla
          itaque incidunt voluptates est. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Sapiente nam quos aspernatur rerum rem
          consequatur voluptatum consequuntur quasi temporibus! Libero officiis
          nesciunt id voluptatibus minus nulla itaque incidunt voluptates est.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
