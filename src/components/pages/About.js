import React from 'react';
import '../../styles/about.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function About() {
  return (
    <div class="main">
      <div class="header">
        <h1> Renan <span class="Lodi">Lodi</span>
        </h1>
      </div>
      <div id="About-Me" class="About-Me" >
        <h1>About Me</h1>
        <p>
          I started my journey the day I came out to this world in the small town called "Foumban" in West region located in Cameroon.
          Since that day, I had to challenge the world and his difficulties.I fought everyday in order to have an acceptable life in the rude environment.
          By the will of the God I made it through the school where I got my degree in Forest Ressouces Management.
          After that, I moved here in USA about a year and a half and I started a new journey in Coding through University of Miami.
          So, besides my knowledge in Forest, I have skills in HTML, CSS, Javacript etc...
        </p>
      </div>

      <div class="footer" >
        <a href='https://www.linkedin.com/in/anicet-ndam-landry-4b534299?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8lJ687UGR7mWcboqVx%2FCLg%3D%3D'>
        <FaLinkedin  fontSize="60px"/>
          </a> 
        <a href="ndamanicet55@gmail.com">
          <FiMail fontSize="60px" />
          </a>
        <a href='https://github.com/RenanLodi'>
          <FaGithub fontSize="60px" />
          </a> 
      </div>
    </div>
  );
}
