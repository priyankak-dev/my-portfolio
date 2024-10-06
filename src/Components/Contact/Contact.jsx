import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'



const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0b1efb17-4c48-425d-895d-bd4f8f5c3a8a");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          alert(data.message);
        }
      };
    return (
        <div className='contact' id='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern}></img>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am currently available for new opportunities and collaborations, offering expertise in full stack web development to help drive your projects forward.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>priyanka.k.tech@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+91 7358399358</p>
                        </div>

                        <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Bangalore</p>
                        </div>
                    </div>
                </div>

                <form className="contact-right" onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name'/>

                    <label>Your Email</label>
                    <input type="email" placeholder='Enter Your email' name='email'/>

                    <label>Write Your MEssage Here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    <button className="contact-submit" type='submit'>Submit Now</button>


                </form>
            </div>


        </div>
    )
}

export default Contact
