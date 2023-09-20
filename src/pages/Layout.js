import { Outlet, Link } from "react-router-dom";
import './App.css';
import { useState, useEffect, useRef, useCallback } from "react";
// import { useEffect, useRef  } from "react";
// import $ from 'jquery';

const Layout = () => {

  const count = useRef("notHidden");
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
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
      <nav>
        <ul >
          <li >
            <Link to="/">Home</Link>
          </li>
          <li >
            <Link to="/skillshowcase">Skill Showcase</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={count.current} >
        <button className='aboutBtn'>About</button>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;