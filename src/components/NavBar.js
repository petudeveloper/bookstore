import { Link, NavLink } from 'react-router-dom';
import userIcon from '../styles/user-icon.svg';

const NavBar = () => (
  <nav className="navBar">
    <div className="container-left-nav">
      BookStore CMS
      <ul className="nav-list">
        <li><Link to="/">Books</Link></li>
        <li><NavLink to="/Categories">Categories</NavLink></li>
      </ul>
    </div>
    <img src={userIcon} alt="" className="user-icon" />
  </nav>
);

export default NavBar;
