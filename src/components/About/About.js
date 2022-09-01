import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'

import whoAmI from '../../assets/projects/who_i_am_transparent_abackground_abstract_image.png';



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{ color: theme.tertiary80 }}>{aboutData.description1} Maintained by <a href="https://aritraroy.live/">Aritra Roy</a>.<br /><br />{aboutData.description2}<a href="https://opensea.io/futuristic_ai">OpenSea</a>.<br /><br />ONE GIVEAWAY IS GOING ON. Join our <a href="https://discord.gg/JaABGdaCkP">Discord</a> community to participate.</p>
                </div>
                <div className="about-img">
                    <img 
                        src={whoAmI}
                        alt="who_i_am_transparent_abackground_abstract_image" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
