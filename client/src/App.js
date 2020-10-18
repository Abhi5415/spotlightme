import React from 'react'
import SplitLeft from "./components/SplitLeft"

export default function App () {
	return(
		<div>

		<SplitLeft/>

    <div className="split right">
      <div className="inner">
          
          <div id="title">Intro</div>
          <div className="content">
            <p>I am a second year studying biomedical engineering at the University of Waterloo.</p>
            <p>I enjoy building things for the web and am equipped with an eagerness to learn. 
              A few of my interests include web and app development, and data processing. 
              I'm passionate about sustainability and love traveling (I've lived in nine different countries and visited countless more)!</p>
            <p>I'm currently looking for an internship / co-op opportunity for the winter (Jan - Apr 2021).</p>
          </div>

          <div id="title">Skills</div>
          <div className="content">
            <p><b>Languages:</b> JavaScript, HTML, CSS, Python, C++, C#</p>
            <p><b>Libraries & Frameworks:</b> React, Bootstrap, TailwindCSS, Material-UI, Node.js, Flask</p>
            <p><b>Other Tools:</b> Git & GitHub, SolidWorks, Command Line, Figma, npm, Heroku</p>
          </div>

          <div id="title">Projects</div>
          <div className="content">
              <p><a href="https://www.instagram.com/uoft_fable/" target="_blank">UFable</a></p>
                <p>A platform built for university students to communicate and connect with classNamemates for the online term using React.
                    I was responsbile for designing and developing the Dashboard and Log-In pages.</p>
              <p><a href="https://github.com/y2kwak/marketplace" target="_blank">MarketPlace</a></p>
                <p>React website template for displaying products through HTTP Request.</p>
              <p><a href="https://github.com/r69ma/py-emg" target="_blank">BioTron Signal Processing</a></p>
                <p>A manual classNameification script for pattern recognition of EMG signals from human-interface device, MYO Thalmic bracelet, using various Python  packages, numpy, scipy, sklearn, matplotlib.</p>
              <p><a href="https://github.com/y2kwak/starterhacks20" target="_blank">Food Expiration Tracker App</a></p>
                <p>A mobile application created with React Native to help users track the expiration dates of food items with the ultimate goal to reduce food waste.</p>
          </div>

          <div id="title" >Experience</div>
          <div className="content" id="experience">
              <p><b>Undergraduate Research Assistant for <a href="https://uwaterloo.ca/scholar/x369wu" target="_blank">Dr. Xiaoyu Wu</a></b></p>
              <p className="sub"><i>September 2020 - present</i></p>
              <ul className="description">
                <li>Will perform lifecycle analysis of a clean water production device, focusing on the production of ethylene, to reduce environmental impact</li>
              </ul>
            
              <p><b>Marketing Intern at <i>Flying Tiger</i></b></p>
              <p className="sub"><i>June - July 2020</i></p>
              <ul className="description">
                  <li>Promoted campaign products on social media with marketing director</li>
                  <li>Designed graphics for product details to upload to online malls and social media </li>
              </ul>
              <p><b>Marketing Executive, <a href="http://www.akcse.ca/" target="_blank">AKCSE</a> Waterloo</b></p>
              <p className="sub"><i>January 2020 - present</i></p>
              <ul className="description">
                <li>Planned academic, social, and informational events to support Korean-Canadian community at the University of Waterloo</li>
                <li>Organized an online event for incoming first years and communicated with other executive members virtually</li>
            </ul>
          </div>

          <div id="title">Education</div>
          <div className="content">
              <p style={{marginBlockEnd: "3px"}}><b>University of Waterloo</b></p>
              <p><b><i>Department of Systems Design Engieering</i></b></p>              
              <p>Major of Study: <i>Biomedical Engineering</i></p>
              <p className="sub">Expected Graduation Date: May 2024</p>

              <p style={{marginBlockEnd: "3px", marginTop: "20px"}}><b>Walworth Barbour American International School</b></p>
              <p><b><i>Even Yehuda, Israel</i></b></p>   
              <p>High School Diploma 2018</p>           

          </div>

          

        </div>
				</div>
				</div>

	)
}