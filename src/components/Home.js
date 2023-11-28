import React from 'react';
import './Home.css';
import Gallery from './Gallery';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/kid4.jpeg';
import image5 from '../images/kid6.jpeg';
import image6 from '../images/kid5.jpeg';
import aboutImage from '../images/background.jpg';
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
        <section className='about about-container'>
            <div className='left'>
                <h2 class="about-title">Welcome to Takoma Park Child Development Center</h2>
                <h3>Love for Learning. Respect for Others. </h3>
                <p>TPCDC's mission is to provide children with a safe and nurturing environment where a positive sense of self, feelings of trust and security, and a love for learning and respect for others will develop. The Center is dedicated to promoting a harmonious, diverse community, and to supporting families by providing consistent, convenient, affordable, and high quality child care.</p>
                <br/>
                <br/>
                <h3>Highlights/Quick Facts:</h3> 
                <ul>
                    <li> Year-round, full time preschool program for ages 18 months-5 years</li>
                    <li>Before &amp; after care and summer camp for grades K-6</li>
                    <li>Open Monday-Friday, 7 AM-6 PM</li>
                    <li>Developmentally appropriate play-based curriculum</li>
                    <li>Qualified, caring &amp; experienced Staff</li>
                    <li>Nutritious meals &amp; snacks </li>
                    <li>Located two blocks from the Takoma Metro/Downtown Takoma Park</li>
                </ul>

                <p>Please feel free to <a href="contact-us.html" previewlistener="true">contact us</a> to setup a time when you can come tour our facility and meet our staff. We look forward to meeting you and your children. </p>
               <br />
            </div>
            
            <div className='right'>
                <img src={aboutImage} alt='program' />
            </div>


        </section>



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
        <section className='contact'>


        </section>

        {/* maps  */}
        <section className='maps'>


        </section>

      
    </>
    );
   
}

export default Home;
