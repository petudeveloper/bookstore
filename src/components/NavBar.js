import { Link, NavLink } from 'react-router-dom';
import userIcon from '../styles/user-icon.svg';

const NavBar = () => (
  <nav className="navBar">
    <div className="container-left-nav">
      <span className="logo-navbar">BookStore CMS</span>
      <ul className="nav-list">
        <li><Link className="link-nav" to="/">Books</Link></li>
        <li><NavLink to="/Categories" className="link-nav">Categories</NavLink></li>
      </ul>
    </div>
    <div className="icon-container">
      <img src={userIcon} alt="" className="user-icon" />
    </div>
  </nav>
);

export default NavBar;
