import { Outlet, Link } from "react-router-dom";
import './App.css';
import { useState, useEffect, useRef, useCallback } from "react";
// import { BrowserView, MobileView } from 'react-device-detect';
import { BrowserView } from 'react-device-detect';

const Layout = () => {

  const count = useRef("notHidden");
  const [y, setY] = useState(window.scrollY);
  const [nexClassNameclass, setnexClassNameclass] = useState("hidden");

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

  const bigDiv = () => {
    setnexClassNameclass("hidden");
    count.current = "notHidden";
  }

  const aboutBtnButton = () => {
    setnexClassNameclass("notHidden");
    count.current = "hidden";
  }

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  // https://sentry.io/answers/unique-key-prop/

  return (
    <>

      {/*Leila*/}

      <BrowserView>
        {/* <div className={"nexClassName " + nexClassNameclass} style={{ zIndex: 101 }} onClick={bigDiv}>
          <div>
            <div>I code.</div>
            <div>Sometimes well.</div>
            <div>Other times really well.</div>
          </div>
        </div> */}

        <nav>
          <ul className="navList">
            <li className="navLink">
              <Link to="/">Home</Link>
            </li>
            <li className="navLink">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="navLink">
              <Link to="/subjects">Subjects</Link>
            </li>
            <li className="navLink">
              <Link to="/contactus">ContactUs</Link>
            </li>
            <li className="navLink">
              <Link to="/testimonials">Testimonials</Link>
            </li>
          </ul>
        </nav>
      </BrowserView>

      {/* <BrowserView>
        <div className={"nexClassName " + nexClassNameclass} style={{ zIndex: 101 }} onClick={bigDiv}>
          <div>
            <div>I code.</div>
            <div>Sometimes well.</div>
            <div>Other times really well.</div>
          </div>
        </div>
        <nav>

          <ul className="navList">
            <li className="navLink">
              <Link to="/">Home</Link>
            </li>
            <li className="navLink">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="navLink">
              <Link to="/svgtest">SVGTest</Link>
            </li>
          </ul>
        </nav>
      </BrowserView> */}

      {/* <MobileView>
      <div className={"nexClassName " + nexClassNameclass} style={{ zIndex: 101 }} onClick={bigDiv}>
          <div>
            <div>I code.</div>
            <div>Sometimes well.</div>
            <div>Other times really well.</div>
          </div>
        </div>
        <nav>
          <ul className="navList">
            <li className="navLink">
              <Link to="/">Home</Link>
            </li>
            <li className="navLink">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </MobileView> */}

      <div className={count.current}>
        {/* <button className='aboutBtn' onClick={aboutBtnButton}>About</button> */}
      </div>

      <Outlet />
    </>
  )
};

export default Layout;