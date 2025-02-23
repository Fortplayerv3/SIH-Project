<?php
session_start();
include("connect.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
    <link rel="stylesheet" href="home.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>

    <!-- Navigation Bar -->
    <div class="navbar">
        <div class="navbar-left">
            <a href="home.php">Home</a>
            <a href="explore.html">Explore</a>
            <a href="event.html">Event</a>
            <a href="quiz.html">Quiz</a>
            <a href="Contact-Form/contact.html">Contact</a>
        </div>
        <div class="nav-language">
            <img src="india-flag-icon.jpg" width="20px">
            <p class="p1">EN</p>
            <img src="dropdown_icon.png" width="8px" alt="">
            <p class="p2"><a href="logout.php">Logout</a></p>
        </div>

    </div>
    <div class="arrow arrow-left">&#8249;</div>
    <div class="arrow arrow-right">&#8250;</div>
    <section class="main-content">
        <h1 class="main-heading">Culture Canvas</h1>
        <p class="description"> <b>Welcome to Culture Canvas, where we explore the rich and diverse cultures of India.
                Discover festivals, food, traditions, and much more as we delve into the vibrant tapestry of Indian
                culture.</b></p>
    </section>
    <h1 class=" heading1">Featured</h1>
    <div class=featured-section>
        <div class="card">
            <img src="explore.jpeg" alt="">
            <div class="card-content">
                <h3>Explore</h3>
                <p>Explore various categories and sections in depth.</p>
                <a href="#">Explore Now</a>

            </div>
        </div>
        <div class="card">
            <img src="event2.jpeg" alt="Explore Page Image">
            <div class="card-content">
                <h3>Event Page</h3>
                <p>Interactive Quiz to know more About Culture Heritage of India</p>
                <a href="#">Check live Session and Event</a>
            </div>
        </div>
        <div class="card">
            <img src="quiz3.jpeg" alt="Event Page Image">
            <div class="card-content">
                <h3>Quiz</h3>
                <p>An interactive assessment designed to test your knowledge of Indian customs, traditions, culture, and
                    historical contexts.</p>
                <a href="#"> Test Your Knowledge</a>
            </div>
        </div>
        <div class="card">
            <img src="community.jpeg" alt="Event Page Image" height="170.88px">
            <div class="card-content">
                <h3>Community</h3>
                <p>A virtual space for fostering connections, sharing ideas, and engaging in meaningful discussions.</p>
                <a href="#">Share your Cultural experience and stories</a>
            </div>
        </div>
        <div class="card">
            <img src="aichatbot.jpeg" alt="Event Page Image">
            <div class="card-content">
                <h3>Event Page</h3>
                <p>A digital assistant that can provide information on a wide range of field and responding to your
                    queries , ready to chat about anything and everything</p>
                <a href="#">Ask your query to AI powered Chatbot</a>
            </div>
        </div>
    </div>
   <section class=bg-color>
    <h1 class="heading1"> Future Upgrades</h1>
    <div class=featured-section>
        <div class="card">
            <img src="arvr4.jpeg" alt="">
            <div class="card-content">
                <h3>AR/VR Effects</h3>
                <p>Revolutionizing the field of culture heritage by bring them to reality using technology</p>
                

            </div>
        </div>
        <div class="card">
            <img src="3dmodels1.jpeg" alt="">
            <div class="card-content">
                <h3>3D Models of Artifacts</h3>
                <p>A 3D artifact model is a digital representation of a physical object. It offers a detailed, three-dimensional view, allowing for close examination from all angles.</p>
                

            </div>
        </div> <div class="card">
            <img src="language.jpeg" alt="">
            <div class="card-content">
                <h3>Multilingual support</h3>
                <p>multilingual website is a digital platform designed to cater to users from diverse linguistic backgrounds. By offering content in multiple languages, it effectively bridges cultural barriers and expands its global reach.</p>
                

            </div>
        </div>
    </div>
    <h1 class="heading1"> Communities</h1>
    <div class="social-icons">
        <div class="top-row">
            <a href="#"><i class="fa fa-instagram" style="font-size:48px;color:red"></i></a>
            <a href="#"><i class="fa fa-whatsapp" style="font-size:48px;color:green"></i></a>
            <a href="#"><i class="fa fa-facebook" style="font-size:48px;color:blue"></i></a>
        </div>
        <p>OR</p>
        <a href="chat.php"><i class="fa fa-users" style="font-size:48px;color:rgb(7, 7, 7)"></i></a>

 </div>
 <section class="faq-section">
    <h1>Frequently Asked Questions</h1>
    <div class="faq-container">
        <div class="faq-item">
            <button class="faq-question"> What is the purpose of this website?</button>
            <div class="faq-answer">
                <p>This website aims to promote and preserve cultural heritage by sharing stories, traditions, and historical information, and providing a platform for community engagement and education.</p>
            </div>
        </div>
        <div class="faq-item">
            <button class="faq-question">How can I contribute to the website?</button>
            <div class="faq-answer">
                <p>You can contribute by sharing your own cultural heritage stories, photos, and videos, or by participating in online forums and discussions. You can also support our efforts by donating or volunteering</p>
            </div>
        </div>
        <div class="faq-item">
            <button class="faq-question">Can I use the images and content from this website?</button>
            <div class="faq-answer">
                <p>Most of the content on this website is available for personal, non-commercial use, but please contact us for permission to use images or content for commercial purposes.</p>
            </div>
        </div>
        
        <div class="faq-item">
            <button class="faq-question">How can I find specific information on this website?</button>
            <div class="faq-answer">
                <p>Use our chatbot to find specific topics, or browse through our categories to discover related content.</p>
            </div>
        </div>
        <div class="faq-item">
            <button class="faq-question"> Can I submit an event or exhibition for listing on the website?</button>
            <div class="faq-answer">
                <p>Yes, please contact us with details of your event or exhibition, and we will consider listing it on our website.</p>
            </div>
        </div>
        <div class="faq-item">
            <button class="faq-question">  How can I stay updated on new content and initiatives?</button>
            <div class="faq-answer">
                <p> Follow us on social media or the community chanel, or sign up in our website to stay updated on new content, events, and initiatives.
                </p>
            </div>
        </div>
        
    </div>
</section></section>
 <div class="footer">
    <div class="row">
        <div class="col">
            <a href="#">FAQ</a>
            <a href="#">Partners</a>
        </div>
        <div class="col">
            <a href="#">Privacy</a>
            <a href="#">Help</a>
        </div>
        <div class="col">
            <a href="#">Account</a>
            <a href="#">Ways to Explore</a>
        </div>
        <div class="col">
            <a href="#">Terms of use</a>
            <a href="#">Contact Us</a>
        </div>
    </div>
    <div class="copyright">
        | Copyright &copy; CulturalCanvas.com | All Rights reserved |
</div>
</div>

<script src="home.js"></script>

<script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/7336a250-20f5-46b0-a54f-53d7abe72dbb/webchat/v2.1/config.js"></script>
</body>
</html>