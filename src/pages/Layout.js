import { Outlet, Link } from "react-router-dom";
import './App.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skillshowcase">Skill Showcase</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <hr />
        </ul>
      </nav>
      
      <button className='aboutBtn'>About</button>

      <Outlet />
    </>
  )
};

export default Layout;