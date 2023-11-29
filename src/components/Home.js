import React from 'react';
import './Home.css';
import Gallery from './Gallery';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/kid4.jpeg';
import image5 from '../images/kid6.jpeg';
import image6 from '../images/kid5.jpeg';
import aboutImage from '../images/aboutImg1.jpeg';
import toddler from '../images/toddler.jpg';
import preschool from '../images/preshool.jpg';
import schoolAge from '../images/school.jpg';


const Home = () => { 
    const galleryImages = [
        { img: image1 },
        { img: image2 },
        { img: image3 },
        { img: image4 },
        { img: image5 },
        { img: image6 },
    ]
    // const navigate = useNavigate();
    return (
        <>
        {/* background image */}
        <div className='background-image'>
            <div className='title-container'>
                <h1 className='title'>Welcome to Almaas Family Home Childcare</h1>
                <h1 className='title-sub'>Caring for the future </h1>
                {/* <button className='learn-more'>Learn More</button> */}
            </div>
        </div>

        {/* about the daycare  */}
        <div class="aboutSection">
            <div class="leftSide"> 
                <img src={aboutImage} alt='program' />
            </div>
            
            <div class="rightSide">
                <h2>Welcome to Almaas Family Childcare</h2>
                
                <p>We offer a high-quality learning center located in Rockwall, 
                    Texas - a truly new, innovative and affordable concept in 
                    childcare and preschool education. Our full-time childcare 
                    center offers the finest facilities available for children 
                    ages 6 weeks to school-aged. Our preschool program is designed 
                    for 3 to 5 year olds to prepare them for their all-important 
                    school years ahead. We offer an extensive school-age program 
                    for before and after school for ages 5 to 12 years old with 
                    age appropriate S.T.E.A.M. MakerSpace activities.
                </p>

                <br/>
                <br/>
                <h3>Highlights/Quick Facts:</h3> 
                <ul className='bodycontent'>
                    <li> Year-round, full time preschool program for ages 18 months-5 years</li>
                    <li>Before &amp; after care and summer camp for grades K-6</li>
                    <li>Open Monday-Friday, 5 AM-9 PM</li>
                    <li>Developmentally appropriate play-based curriculum</li>
                    <li>Qualified, caring &amp; experienced Staff</li>
                    <li>Nutritious meals &amp; snacks </li>
                    <li>Located two blocks from the Takoma Metro/Downtown Takoma Park</li>
                </ul>

                <br/>
                <br/>
                <p>Please feel free to contact us at <b> (206)934-9581 </b> to setup a time when you can come tour our facility and meet our staff. We look forward to meeting you and your children. </p>
                
                <br />
            </div>	
        
        </div>

        {/* gallary  */}
        <h1 className='gallery-title'> PHOTO GALLERY</h1>
        <Gallery
            galleryImages={galleryImages}
         />


        {/* programs  */}
        <section className='programs programBox'>
            <h2> Our Programs</h2>
            <div className='programs-container'>
                <a href='#' className='program' previewlistener="true">
                    <div className='program-image'>
                        <img src={toddler} alt='program' />
                    </div>
                    <div className='program-type'>
                        <h3>Infant Program</h3>
                        <p class="ageRange">18 mo to 2 years</p>
                        <p>Our toddler program is designed for children 18 months to 2 years old.</p>
                    </div>
                </a>

                <a href='#' className='program' previewlistener="true">
                    <div className='program-image'>
                        <img src={[preschool]} alt='program' />
                    </div>
                    <div className='program-type'>
                        <h3>Preschool</h3>
                        <p class="ageRange">2 to 5 years</p>
                        <p>Our toddler program is designed for children 18 months to 2 years old.</p>
                    </div>
                </a>

                <a href='#' className='program' previewlistener="true">
                    <div className='program-image'>
                        <img src={schoolAge} alt='program' />
                    </div>
                    <div className='program-type'>
                        <h3>School Age</h3>
                        <p class="ageRange">5 to 12 years</p>
                        <p>Our toddler program is designed for children 18 months to 2 years old.</p>
                    </div>
                </a>

                <a href='#' className='program' previewlistener="true">
                    <div className='program-image'>
                        <img src={image1} alt='program' />
                    </div>
                    <div className='program-type'>
                        <h3>Other Programs</h3>
                        <p class="ageRange">5 to 12 years</p>
                        <p>Our toddler program is designed for children 18 months to 2 years old.</p>
                    </div>
                </a>
            </div>

        </section>


        {/* testimonials */}
        <section className='testimonials'>
        

        </section>


        {/* contact us  */}
        <section className='contactSection'>
            <div class="leftCblock">
                <h1>Our location</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10808.783105947387!2d-122.1280788!3d47.3690973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905f1967c7aaa7%3A0xf4355668dfba3d39!2sAlmaas%20Family%20Childcare!5e0!3m2!1sen!2sus!4v1701227534068!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div class="rightCBlock">
                <div class="desc"> 
                    <h1>Get In Touch</h1>
                    <form>
                        <div>
                            <input type="text" id="name" name="name" placeholder="Name" />
                        </div>
                        <div>
                            <input type="email" id="email" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <textarea id="message" name="message" placeholder="Message"></textarea>
                        </div>
                        <button className='submit'>Send</button>
                    </form>
                </div>
            </div>

        </section>
      
    </>
    );
   
}

export default Home;
