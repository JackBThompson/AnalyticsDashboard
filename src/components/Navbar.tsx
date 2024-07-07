import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" />
        <span>Business Analytics Dashboard</span>
      </div>
      <div className="icons"></div>
      <img src="search.svg" className="icon" />
      <img src="app.svg" className="icon" />
      <img src="expand.svg" className="icon" />
      <div className="notification">
      <img src="notifications.svg" />
      <span>1</span>

      </div>
      <div className="user">
        <img src="noavatar.png" />
      </div>
      <img src="settings.svg" className="icon" />
    </div>
  ); };

export default Navbar