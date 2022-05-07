import React, { Component } from 'react';
import Codesnippet from '../components/codesnip.js';
import "../styles/pages/home.css";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="nameHeader">
                    Willow Rubenstein
                </div>
                <Codesnippet page="home" />
                I make software and music. "What kind of software," I hear you ask? 
                I'm a fullstack developer, meaning I do all sorts of different projects, on both frontend and backend.
                I've done anything from making a physical hardware project where <a href="https://github.com/willow-rubenstein/simpadlib" id="link">I modified a keyboard by injecting Hex to change its RGB colors</a>, 
                to making full video games, and so on and so forth.
                <br/><br/>
                One great example of a software project I worked on is the website you're looking at right now.<br/>
                Sure, I could've hand-written a resume, but that's <div class="rainbow rainbow_text_animated">B O R I N G</div> and old-fashioned.
                I wanted to do something <div class="exciting exciting_text_animated">new</div> and <div class="exciting exciting_text_animated">exciting</div>, and I also wanted to show off my skills/portfolio all in one place,
                so this was my ideal solution.
                <br/><br/>
                <hr />
                <div className="nameHeader">
                    Resume/Portfolio
                </div><br/>
                <div className="resumeTop">
                    <div>
                        Languages/Frameworks:
                        <ul>
                            <li>JavaScript (3 Years)</li>
                            <li>Python (7 Years)</li>
                            <li>HTML(8 Years)</li>
                            <li>CSS (8 Years)</li>
                            <li>React (1 Year)</li>
                            <li>Node.JS (2 Years)</li>
                        </ul>
                    </div>
                    <div>
                        Current Jobs:
                        <ul>
                            <li>Freelance Music Production (2020-Now)</li>
                            <li>Freelance Game Development (2022)</li>
                            <li>ThighhighVT (Owner/Founder) (2021-Now)</li>
                        </ul> 
                    </div>
                    <div>
                        Education:
                        <ul>
                            <li>High School: Ben Franklin Academy (Grade 12, 4.0 GPA)</li>
                            <li>ACT Score: 31</li>
                        </ul> 
                    </div>   
                </div>
                <br/>
                <div className="resumeFill" >
                    Web Development Projects:
                    <ul>
                        <li><a href="https://thighhighvt.org" id="link">thighhighvt.org</a></li>
                        <li><a href="https://shop.thighhighvt.org" id="link">shop.thighhighvt.org (currently down for maintenance)</a></li>
                        <li><a href="https://scorchtogo.com" id="link">scorchtogo.com</a></li>
                        <li><a href="https://anamanaguchi.com/scottpilgrim/" id="link">anamanaguchi.com/scottpilgrim</a></li>
                    </ul>
                </div>
                <br/>
                <div className="resumeFill">
                    GitHub Repositories for Various Projects:
                    <ul>
                        <li><a href="https://github.com/willow-rubenstein/wrubenstein.dev" id="link">This Website!</a></li>
                        <li><a href="https://github.com/willow-rubenstein/Launchpad-Minesweeper" id="link">Minesweeper for my Launchpad (music device)</a></li>
                        <li><a href="https://github.com/willow-rubenstein/CircleRGB" id="link">CircleRGB (Changes keyboard RGB fluidly with score in the rhythm game "osu!"")</a></li>
                        <li><a href="https://github.com/willow-rubenstein/simpadlib" id="link">simpadlib (Custom driver library to change the colors of an RGB keypad using hex)</a></li>
                        <li><a href="https://github.com/willow-rubenstein/whitakers-words" id="link">whitakers-words (Custom translator app I built for my latin class)</a></li>
                        <li><a href="https://github.com/willow-rubenstein/anamanaguchi" id="link">anamanaguchi.com/scottpilgrim (source code)</a></li>
                        <li><a href="https://github.com/willow-rubenstein/frontend" id="link">artoolkit2 frontend (Frontend code for the second iteration of this project that never got used)</a></li>
                        <li><a href="https://github.com/willow-rubenstein/T.C.P.E" id="link">T.C.P.E (A project emulating the "channel point" system on Twitch in Discord)</a></li>
                    </ul>
                </div>
                <br/>
                (P.S. Press The Infinity Button To Change Code Examples On Top)
                <br/><br/>
            </div>
        )
    }
}