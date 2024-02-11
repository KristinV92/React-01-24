import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://corporate.walmart.com/content/corporate/en_us/purpose/sustainability/planet/nature/jcr:content/par/image_2_0.img.png/1693432526985.png"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
        Customers are very satisfied
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Explore nature's healing power on our health website.
      Discover outdoor activities for wellness, holistic health tips, and mindfulness practices.
      Reconnect with nature for a vibrant, balanced life. Join us today!
      </p>
    </div>
  )
}
export default Post;