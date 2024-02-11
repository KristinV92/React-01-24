import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
    <div className="singlePostWrapper">
      <img
        className="singlePostImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <h1 className="singlePostTitle">
        Thank you very much
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">Author:<b>Kristin</b></span>
        <span className="singlePostDate">1 day ago</span>
      </div>
      <p className="singlePostDesc">
      Maintaining good health involves a balanced approach that encompasses physical activity, nutritious eating habits, adequate rest, and stress management.
      Prioritizing preventive care, regular check-ups, and seeking medical attention when necessary are crucial components of a healthy lifestyle.
      By adopting these practices, individuals can enhance their overall well-being and quality of life.
      </p>
    </div>
  </div>
  )
}
export default SinglePost;