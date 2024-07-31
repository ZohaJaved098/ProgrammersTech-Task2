import React from 'react';
import Navbar from '../component/Navbar';

const About = () => {
  return (
    <div className='about'>
      <Navbar />
      <div className="about-heading">
        <h1>About E-Learn</h1>
      </div>
      <div className="about-contents">
        <h2>Welcome to E-Learn!</h2>
        <p>At E-Learn, we believe in the power of accessible and high-quality education. Our mission is to gather the best free online computer science courses in one place, making it easier for learners to find and access top-notch educational resources.</p>
        <h2>Our Vision</h2>
        <p>We envision a world where everyone interested in computer science has easy access to free, high-quality learning opportunities. By curating courses from reputable platforms such as Coursera, Udemy, and Udacity, we aim to streamline the learning process and support your journey in the tech world.</p>
        <h2>What We Offer</h2>
        <h3>Curated Collection</h3>
        <p>We collect and organize free computer science courses from leading e-learning platforms, saving you time and effort in finding the right resources.</p>
        <h3>Centralized Access</h3>
        <p>Access a wide range of topics and skills related to computer science all in one place, tailored to meet diverse learning needs.</p>
        <h3>Up-to-Date Resources</h3>
        <p>We continuously update our collection to include the latest and most relevant courses in the field.</p>
        <h3>User-Friendly Navigation</h3>
        <p>Easily browse through our curated courses with a user-friendly interface designed to help you find what you need quickly.</p>
        <h2>Our Values</h2>
        <h3>Accessibility</h3>
        <p>We are committed to providing free educational resources to learners around the world.</p>
        <h3>Quality</h3>
        <p>We ensure that the courses we feature are from reputable sources and meet high standards of quality.</p>
        <h3>Simplicity</h3>
        <p>We strive to make the process of finding and accessing educational content as straightforward as possible.</p>
        <h3>Empowerment</h3>
        <p>We believe that having access to the right educational resources can empower individuals to achieve their career and personal goals.</p>
        <h2>Our Story</h2>
        <p>E-Learn was founded by a team of computer science enthusiasts who recognized the need for a centralized platform for free learning resources. Our goal is to make it easier for learners to discover and benefit from the best free courses available.</p>
        <h2>Join Us</h2>
        <p>Whether you're looking to enhance your skills, explore new topics, or start a career in computer science, E-Learn is here to support your educational journey. Explore our curated collection of courses and start learning today!</p>
      </div>
    </div>
  );
}

export default About;
