import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg"
          src="https://render.fineartamerica.com/images/rendered/default/canvas-print/10/7/mirror/break/images/artworkimages/medium/3/silhouette-back-woman-long-hair-flying-fluttering-wind-turned-away-face-sitting-in-wooden-boat-tourist-white-blouse-long-sleeves-enjoy-nature-italian-mountains-alpine-lake-river-waves-green-forest-julien-canvas-print.jpg"
          alt=""
        />
        <p className="sidebarP">
        As an individual committed to wellness, you prioritize maintaining a healthy lifestyle and staying informed about the latest developments in health and wellness.
        Your dedication to personal well-being serves as an inspiration to others seeking to achieve optimal health.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}
export default Sidebar;