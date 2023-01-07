import React from "react";

import { BsStars } from "react-icons/bs";
import { SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";

import {
    githubUrl,
    linkedInUrl,
    leetcodeUrl,
    resumeUrl,
    keySkills,
} from "../../common/constants";
import "./home.scss";

const Home = () => {
    return (
        <section className="home-container">
            <div className="info">
                <div className="links">
                    <a
                        href={linkedInUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="linkedIn"
                    >
                        <SiLinkedin className="link-icons" />
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="github"
                    >
                        <SiGithub className="link-icons" />
                    </a>
                    <a
                        href={leetcodeUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="leetcode"
                    >
                        <SiLeetcode className="link-icons" />
                    </a>
                </div>
                <span id="name">Akash Sharma</span>
                <p id="description">
                    I'm coder and professional web developer with ability to
                    manage multiple priorities
                </p>
                <a
                    id="resume"
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    Download Resume
                </a>
            </div>
            <div className="skills">
                <div className="skills-background"></div>
                <div className="skills-front">
                    <span id="key-skills-header">
                        Key Skills
                        <BsStars className="star-icon" />
                    </span>
                    <ul>
                        {keySkills.map((keyskill) => (
                            <li key={keyskill}>{keyskill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Home;
