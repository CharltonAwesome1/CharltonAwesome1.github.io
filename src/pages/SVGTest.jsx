import './App.css';
import { useEffect, useState, useRef } from 'react';


const SVGTest = () => {

  const [mousePos, setMousePos] = useState({});
  const ref = useRef(null);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const x = useRef(0);
  const y = useRef(0);

  const x2 = useRef(0);
  const y2 = useRef(0);

  useEffect(() => {
    x.current = (mousePos.x * 2 - (windowSize[0] / 2)) * 0.25;
    x2.current = (mousePos.x * 2 - (windowSize[0] / 2)) * 0.20;
    y.current = ((mousePos.y * 2) - (windowSize[1] / 2)) * 0.25;
    y2.current = ((mousePos.y * 2) - (windowSize[1] / 2)) * 0.20;

  });

  const styles = {
    transform: `translate3d(${x.current}px, ${y.current}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  };

  const styles2 = {
    transform: `translate3d(${x2.current}px, ${y2.current}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  };

  return (
    <>
      {/* <div className='outsideDiv'> */}
      <h3 ref={ref} >
        The mouse is at position{' '} <b>({mousePos.x}, {mousePos.y})
        </b>
        {/* <h2>Width: {windowSize[0]}</h2>
        <h2>Height: {windowSize[1]}</h2> */}
      </h3>
      {/* </div> */}
      {/*   
        <div className='testDivplsIgnore these'>
          <div className='thistwo ' style={styles}></div>
        </div> */}
      {/* Charlton: This one ^^ is good too */}


      <div className='svgMostOuter'>
        <div className='testDivplsIgnore'>

          <div className='hello'>
            <div className='thisone these topletterline' style={styles}>C</div>
            <div className='thistwo these bottomletterline' style={styles2}>h</div>
            <div className='thisone these topletterline' style={styles}>a</div>
            <div className='thistwo these bottomletterline' style={styles2}>r</div>
            <div className='thisone these topletterline' style={styles}>l</div>
            <div className='thistwo these bottomletterline' style={styles2}>t</div>
            <div className='thisone these topletterline' style={styles}>o</div>
            <div className='thistwo these bottomletterline' style={styles2}>n</div>
          </div>
        </div>
      </div>

    </>);
};

export default SVGTest;