import "./write.scss";
import BodyPic from "../../assets/images/travel2.jpg";

const Write = () => {
  return (
    <div className="write">
      <img className="writeImg" src={BodyPic} alt="" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Share your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Submit</button>
      </form>
    </div>
  );
};

export default Write;
