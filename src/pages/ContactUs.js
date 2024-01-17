import thing from './Leila Dark.jpeg';
import imgcall from './imgcall.png';
import imgemail from './imgemail.png';
import imgfacebook from './imgfacebook.png';
import imginstagram from './imginstagram.png';

/* The icons are copyrighted. We can't legally use them. */
const ContactUs = () => {
  return  (
    <>
      <div>
        {/* <button className="creditCardButton">credit card</button> */}
        <div className='outsideDiv' style={{color: "white"}}>
          {/* <div className='outsideDiv'>
            <h1><s>Contact Me</s></h1>
            <h2>Do not contact me. Thanks.</h2>
          </div> */}
            {/* <div><img src={thing} alt="Logo" /></div> */}
            <div><img src={imgcall} alt="Logo" /></div><div>073 909 2439</div> 
            <div><img src={imgemail} alt="Logo" /></div><div>mathsbiologytutor</div>
            <div><img src={imgfacebook} alt="Logo" /></div><div>leilasbiomathtutoring/</div>
            <div><img src={imginstagram} alt="Logo" /></div><div>biomathtutoring</div>
        </div>
        <div>
        <div></div>
        </div>
      </div>
    </>);
};

export default ContactUs;