import BodyPic from "../../assets/images/travel2.jpg";
import "./post.scss";

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src={BodyPic} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Travel</span>
          <span className="postCat">Movies</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque neque
        minima non tenetur repellendus sapiente doloremque aliquam eum eligendi
        est debitis odio in perspiciatis, ipsum, saepe hic similique! Autem,
        deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Itaque neque minima non tenetur repellendus sapiente doloremque aliquam
        eum eligendi est debitis odio in perspiciatis, ipsum, saepe hic
        similique! Autem, deserunt. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Itaque neque minima non tenetur repellendus sapiente
        doloremque aliquam eum eligendi est debitis odio in perspiciatis, ipsum,
        saepe hic similique! Autem, deserunt.
      </p>
    </div>
  );
};

export default Post;
