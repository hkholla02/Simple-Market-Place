import "./style.css";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <header class="center-text">
      <nav class="menu-container">
  
          <input type="checkbox" aria-label="Toggle menu" />
          <span></span>
          <span></span>
          <span></span>

          
          <Link to="/" class="menu-logo">
            Market Place
          </Link>

          
          <div class="menu">
            <ul>
              <li>
              <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to={`/product/${"electronics"}`}>
                  ELECTRONICS
                </Link>
              </li>
              <li>
                <Link to={`/product/${"jewelery"}`}>
                  Jewelery
                </Link>
              </li>
              <li>
                <Link to={`/product/${"men's clothing"}`}>
                  MEN'S CLOTHING
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to={`/product/${"women's clothing"}`}>
                  WOMEN'S CLOTHING
                </Link>
              </li>
              <li>
                <Link to="#login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    </header>
  );
};

export default Header;
