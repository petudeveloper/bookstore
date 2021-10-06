import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    BookStore CMS
    <ul>
      <li><Link to="/">Books</Link></li>
      <li><NavLink to="/Categories">Categories</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
