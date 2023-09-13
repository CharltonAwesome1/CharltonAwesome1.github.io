// import ScrollReveal from 'scrollreveal';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { useState, useEffect } from "react";

const SkillShowcase = () => {
  {
    const [data, setData] = useState(null);
    const [imgData, setImageData] = useState(null);
    const [counter, setCounter] = useState(0);
    const [imageCounter, setImageCounter] = useState(0);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
        .then((res) => res.json())
        .then((imgData) => setImageData(imgData));
    }, []);
  
  
    return (
      <>
        <br />
        <div className='outsideDiv'>
          <div className='outsideDiv'>
            <h1>Skill Showcase</h1>
          </div>
        </div>
        <div className='outsideDiv'>
        <div className='directionBtn'>
          <button className='prevBtn' onClick={() => setCounter((c) => c > 0 ? c - 1 : 0)}>Previous</button>
          <button className='nextBtn' onClick={() => setCounter((c) => data.length / 10 > c + 1 ? c + 1 : data.length / 10 - 1)}>Next</button>
        </div>
        {data &&
          data.map((item) => {
            return (
              (item.id >= (counter * 10 + 1) && item.id <= (counter * (10) + 10)) ?
                (<Fade left><p key={item.id}>{item.id} .  {item.title}</p></Fade>) :
                <></>
            )
          })};
      </div>

      <button onClick={() => setImageCounter((c) => c > 0 ? c - 1 : 0)}>Previous image page</button>
      <button onClick={() => setImageCounter((c) => imgData.length / 10 > c + 1 ? c + 1 : imgData.length / 10 - 1)}>Next image page</button>
      <div>
        {imgData &&
          imgData.map((image) => {
            return (
              (image.id >= (imageCounter * 10 + 1) && image.id <= (imageCounter * (10) + 10)) ?
                (
                  <Bounce>
                    <div className='test'>
                      <img key={image.id} src={image.thumbnailUrl} alt={image.title} />
                    </div>
                  </Bounce>
                ) :
                <></>
            )
          })};
      </div>
      </>);
  }
};

export default SkillShowcase;