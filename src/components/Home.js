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
                
                <p>We offer a high-quality learning center located in Covington, 
                    WA - a truly new, innovative and affordable concept in 
                    childcare. Our full-time childcare offers the finest facilities available for children 
                    ages new born to school-aged. Almaas Family Childcare 
                    provides a high-quality and professional caregiver's home. 
                    It's our aim to provide fun and caring. Let us know what 
                    you need for your child because you won't find better 
                    daycare in King County. Contact us at <b> (206)934-9581 </b> 
                    for more information
                </p>

                <br/>
                <br/>
                <h3>Highlights/Quick Facts:</h3> 
                <ul className='bodycontent'>
                    <li>Developmentally appropriate play-based curriculum</li>
                    <li>Qualified, caring &amp; experienced Staff</li>
                    <li> Year-round, full time program</li>
                    <li>Open Everyday, 5 AM-9 PM</li>
                    <li>Before &amp; after school care </li>
                    <li>Nutritious meals &amp; snacks </li>
                </ul>

                <br/>
                <br/>
                <p>Please feel free to contact us at <b> (206)934-9581 </b> to setup a 
                time when you can come tour our facility and meet. We look 
                forward to meeting you and your children. </p>
                
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
                        <p>Our infant program provides a nurturing environment for children aged 18 months to 2 years, fostering early development and exploration.</p>

                    </div>
                </a>

                <a href='#' className='program' previewlistener="true">
                    <div className='program-image'>
                        <img src={[preschool]} alt='program' />
                    </div>
                    <div className='program-type'>
                        <h3>Preschool</h3>
                        <p class="ageRange">2 to 5 years</p>
                        <p>Our preschool program focuses on foundational skills and social interaction for children aged 2 to 5 years, preparing them for a smooth transition to formal education.</p>
                    </div>
                </a>

                <a href='#' className='program' previewlistener="true">
                    <div className='program-image'>
                        <img src={schoolAge} alt='program' />
                    </div>
                    <div className='program-type'>
                        <h3>School Age</h3>
                        <p class="ageRange">5 to 12 years</p>
                        <p>Our school-age program offers a stimulating environment for children aged 5 to 12 years, combining education and recreation to support their ongoing development.</p>
                    </div>
                </a>

                <a href='#' className='program' previewlistener="true">
                    <div className='program-image'>
                        <img src={image1} alt='program' />
                    </div>
                    <div className='program-type'>
                        <h3>Other Programs</h3>
                        <p class="ageRange">5 to 12 years</p>
                        <p>Explore our diverse range of programs tailored to different age groups and interests, ensuring a holistic and enriching experience for all participants.</p>
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
