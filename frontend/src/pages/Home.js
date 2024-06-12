// Home.js
import React from 'react';

function Home() {
  return (
    <div>
      <section class="home" id="home">
        <div class="image">
            <img src="./image/gifgreen1_changed.gif" alt="home-img.svg" />
        </div>
        <div class="content">
            <h3>stay safe, stay healthy</h3>
            <p>All medicos assemble </p>
            <a href="#" class="btn">contact us <span class="fas fa-chevron-right"></span> </a>
        </div>
    </section>
    <section class="icons-container">
        <div class="icons">
            <i class="fas fa-user-md"></i>
            <h3>70+</h3>
            <p>Doctors at work</p>
        </div>
        <div class="icons">
            <i class="fas fa-users"></i>
            <h3>505+</h3>
            <p>Satisfied patients</p>
        </div>
        <div class="icons">
            <i class="fas fa-procedures"></i>
            <h3>53+</h3>
            <p>medical stores</p>
        </div>
        <div class="icons">
            <i class="fas fa-hospital"></i>
            <h3>19+</h3>
            <p>available hospitals</p>
        </div>
    </section>
    <section class="services" id="services">
        <h1 class="heading">Our <span>services</span></h1>
        <div class="box-container">
        <div class="box">
                <i class="fas fa-notes-medical"></i>
                <h3>Digital Record</h3>
                <p>Store what ever is necessary for future and now, become stress free.</p>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span> </a>
            </div>
            <div class="box">
                <i class="fas fa fa-archive"></i>
                <h3>Treatment Plans</h3>
                <p>First consultation is free for every user, applicable once per user.</p>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span> </a>
            </div>
            <div class="box">
                <i class="fas fa-user-md"></i>
                <h3>Automatic Reminders</h3>
                <p>Get  Set  Take, Make no delay in taking anything can change us.</p>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span> </a>
            </div>
            <div class="box">
                <i class="fas fa-pills"></i>
                <h3>Secure Platform</h3>
                <p>Your security and privacy is our first priority.</p>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span> </a>
            </div>
            <div class="box">
                <i class="fas fa-ambulance"></i>
                <h3>Easy Access</h3>
                <p>Share and access your file anytime and anywhere</p>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span> </a>
            </div>
            <div class="box">
                <i class="fas fa-heartbeat"></i>
                <h3>Collaboration</h3>
                <p>We have many highly skilled online consultants, ready to provide expert assistance to your specific needs.</p>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span> </a>
            </div>
        </div>
    </section>
    <section class="doctors" id="doctors">
        <h1 class="heading">OUR <span>COLLABORATIVES</span></h1>
        <div class="box-container">
        <div class="box">
                <img src="./image/doc-1.jpg" alt=""/>
                <h3>Dr. Guptha</h3>
                <span>Expert doctor(Psychologist)</span>
                <a href="./files.html" class="btn"> Book Now</a>
                <hr/>
                <h1> Rs. 300</h1>
                {/* <!-- <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div> --> */}
            </div>
            <div class="box">
                <img src="./image/doc-2.jpg" alt=""/>
                <h3>Dr. Ramesh</h3>
                <span>Expert doctor(Neurologist)</span>
                <a href="./files.html" class="btn"> Book Now</a>
                <hr/>
                <h1> Rs. 300</h1>
                {/* <!-- <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div> --> */}
            </div>
            <div class="box">
                <img src="./image/doc-3.jpg" alt=""/>
                <h3> Dr. Krishnamurthy</h3>
                <span>Expert doctor(Orthopedic)</span>
                <a href="./files.html" class="btn"> Book Now</a>
                <hr/>
                <h1> Rs. 300</h1>
                {/* <!-- <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div> --> */}
            </div>
            <div class="box">
                <img src="./image/doc-4.jpg" alt=""/>
                <h3>Dr. Radha Krishna</h3>
                <span>Expert doctor(Surgeon)</span>
                <a href="./files.html" class="btn"> Book Now</a>
                <hr/>
                <h1> Rs. 300</h1>
                {/* <!-- <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div> --> */}
            </div>
            <div class="box">
                <img src="./image/doc-5.jpg" alt=""/>
                <h3>Dr. Nippam</h3>
                <span>Expert doctor(Urologist)</span>
                <a href="./files.html" class="btn"> Book Now</a>
                <hr/>
                <h1> Rs. 300</h1>
                {/* <!-- <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div> --> */}
            </div>
            <div class="box">
                <img src="./image/doc-6.jpg" alt=""/>
                <h3>Dr. Suresh</h3>
                <span>Expert doctor(Cardiologist)</span>
                <a href="./files.html" class="btn"> Book Now</a>
                <hr/>
                <h1> Rs. 300</h1>
                {/* <!-- <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div> --> */}
            </div>
        </div>
    </section>
    {/* <script>
        function redirectToRegisterPage() {
            // Change "register.html" to the actual file/page you want to redirect to
            window.location.href = "register.html";
        }
    </script> */}
    {/* <!-- Book section End  --> */}
    <section class="review" id="review">
        <h1 class="heading">Client's <span>review</span></h1>
        <div class="box-container">
        <div class="box">
                <img src="./image/pic-1.png" alt=""/>
                <h3>Chris</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p class="text">Love this website, i use it to systematize my medical records across the folders. Its an essential tool i use to optimise access.</p>
            </div>
            <div class="box">
                <img src="./image/pic-2.png" alt=""/>
                <h3>Anitha</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    {/* <!-- <i class="fas fa-star-half-alt"></i> --> */}
                </div>
                <p class="text">Love it!!! I connected my primary physician easily. Worked like a charm, looking forward for more features comming.</p>
            </div>
            <div class="box">
                <img src="./image/pic-3.png" alt=""/>
                <h3>Jonny</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p class="text">Easy way to download my medical records from anywhere, if Lab tests results could be displayed would be great. </p>
            </div>
        </div>
    </section>
    <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>quick links</h3>
                <a href="#"> <i class="fas fa-chevron-right"></i> Home</a>
                <a href="#"> <i class="fas fa-chevron-right"></i> Stored Files</a>
                <a href="#"> <i class="fas fa-chevron-right"></i> About</a>
                <a href="#"> <i class="fas fa-chevron-right"></i> Doctors</a>
                <a href="#"> <i class="fas fa-chevron-right"></i> Book appointment</a>
                <a href="#"> <i class="fas fa-chevron-right"></i> Review</a>
                <a href="#"> <i class="fas fa-chevron-right"></i> Blogs</a>
            </div>
            <div class="box">
                <h3>Our services</h3>
                <a href="#"> <i class="fas fa-chevron-right"></i> Storage</a>
                <a href="#"> <i class="fas fa-chevron-right"></i> Consultation</a>
                <a href="#"> <i class="fas fa-chevron-right"></i> Massage therapy</a>
                <a href="#"> <i class="fas fa-chevron-right"></i> Cardioloty</a>
                <a href="#"> <i class="fas fa-chevron-right"></i> Diagnosis</a>
                <a href="#"> <i class="fas fa-chevron-right"></i> Ambulance service</a>
            </div>
            <div class="box">
                <h3>Contact info</h3>
                <a href="#"> <i class="fas fa-phone"></i> +91-9967814533</a>
                <a href="#"> <i class="fas fa-phone"></i> 080-35648102</a>
                <a href="#"> <i class="fas fa-envelope"></i> healthrek09.info.com</a>
                <a href="#"> <i class="fas fa-envelope"></i> healthrek09@gmail.com</a>
                <a href="#"> <i class="fas fa-map-marker-alt"></i> Bangalore, Karnataka-98.</a>
            </div>
            <div class="box">
                <h3>follow us</h3>

                <a href="#"> <i class="fab fa-facebook-f"></i> facebook</a>
                <a href="#"> <i class="fab fa-twitter"></i> twitter</a>
                <a href="#"> <i class="fab fa-linkedin"></i> linkedin</a>
                <a href="#"> <i class="fab fa-instagram"></i> instagram</a>
                <a href="#"> <i class="fab fa-youtube"></i> youtube</a>
                <a href="#"> <i class="fab fa-pinterest"></i> pinterest</a>
            </div>
        </div>
        <div className="credit"><a href="https://www.healthrek.com" target="_blank">
        <img src="https://hitwebcounter.com/counter/counter.php?page=10923605&style=0032&nbdigits=6&type=page&initCount=890" title="Counter Widget" Alt="Visit counter For Websites"   border="0" /></a> <br></br> Created  by<span> Healthrek Associates </span> | all right reserved</div>
    </section>

        </div>
  );
}

export default Home;
