import { Outlet, Link } from "react-router-dom";
import './App.css';
import { useState, useEffect, useRef, useCallback } from "react";
import { BrowserView, MobileView } from 'react-device-detect';

const Layout = () => {

  const count = useRef("notHidden");
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY && window.scrollY < 75) {
        count.current = "notHidden";
      } else if (y < window.scrollY) {
        count.current = "hidden";
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  /* Should maybe change this. Evelyn says it should only be clickable at the top. */


  // https://sentry.io/answers/unique-key-prop/

  return (
    <>

      {/* <nav>
        <ul className="navList">
          <li className="navLink">
            <Link to="/">Home</Link>
          </li>
          <li className="navLink">
            <Link to="/skillshowcase">Skill Showcase</Link>
          </li>
          <li className="navLink">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navLink">
            <Link to="/svgtest">SVGTest</Link>
          </li>
          
        </ul>
      </nav> */}
      <BrowserView>
        <nav>
          {/* <img id="logo" src="logo192.png" alt="" style={{float: 'left'}}/> */}
          {/* Charlton - look into this */}
          <ul className="navList">
            <li className="navLink">
              <Link to="/">Home</Link>
            </li>
            <li className="navLink">
              <Link to="/skillshowcase">Skill Showcase</Link>
            </li>
            <li className="navLink">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="navLink">
              <Link to="/svgtest">SVGTest</Link>
            </li>
          </ul>
        </nav>
      </BrowserView>

      <MobileView>
        <nav>
          <ul className="navList">
            <li className="navLink">
              <Link to="/">Home</Link>
            </li>
            <li className="navLink">
              <Link to="/skillshowcase">Skill Showcase</Link>
            </li>
            <li className="navLink">
              <Link to="/contact">Contact</Link>
            </li>
            {/* <li className="navLink">
            <Link to="/svgtest">SVGTest</Link>
          </li> */}
          </ul>
        </nav>
      </MobileView>

      {/* <div className="aboutDiv"> */}
      <div className={count.current}>
        <button className='aboutBtn'>About</button>
      </div>

      {/* <ul>
            <li><a href="#">Home</a></li>
            <li>
              <a href="#">About</a>
              <ul class="submenu">
                <li><a href="#">About 1</a></li>
                <li><a href="#">About 2</a></li>
                <li><a href="#">About 3</a></li>
              </ul>
            </li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul> */}

      {/* <ul>
            <li><a href="#">Home</a></li>
            <li>
              <a href="#">About</a>
              <ul class="submenu">
                <li><a href="#">About 1</a></li>
                <li><a href="#">About 2</a></li>
                <li><a href="#">About 3</a></li>
              </ul>
            </li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul> */}
      {/* <ul>
          <li><a href="#">Menu Item</a></li>
          <li><a href="#">Menu Item</a></li>
          <li><a href="#">Menu Item</a></li>
          <li class="menu-header">OTHER</li>
          <li><a href="#">Menu Item</a></li>
          <li><a href="#">Menu Item</a></li>
        </ul> */}
      {/* </div> */}

      <Outlet />
    </>
  )
};

export default Layout;