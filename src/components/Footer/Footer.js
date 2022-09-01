import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'
import { makeStyles } from '@material-ui/core/styles';
import {
    FaTwitter,
    FaGithub,
    FaInstagram,
    FaFacebook,
    FaDiscord,
    // FaTelegram,
    FaEye
} from 'react-icons/fa';
import { socialsData } from '../../data/socialsData';
import countapi from 'countapi-js';
import OpenSeaLogo from '../../assets/OpenSeaLogo.png'

function Footer() {

    const shortname = (name) => {
        if (name.length > 10) {
            return name
        } else {
            return name
        }
    }
    const { theme } = useContext(ThemeContext)

    const useStyles = makeStyles((t) => ({
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
            },
        }
    }));
    const classes = useStyles();

    function totalView() {
        countapi.visits().then((result) => {
            document.getElementById('visits').innerText = result.value;
        });
    }

    return (
        <div className="footer" style={{ backgroundColor: theme.secondary }}>
            <div className='socialmedia-icons'>
                <a
                    href="https://opensea.io/futuristic_ai"
                    target='_blank'
                    rel='noreferrer'
                    className={classes.socialIcon}
                >
                    <img id='OpenSeaLogoFooter' src={OpenSeaLogo} alt='OpenSea' />
                </a>
                {socialsData.discord && (
                    <a
                        href={socialsData.discord}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.socialIcon}
                    >
                        <FaDiscord aria-label='Discord' />
                    </a>
                )}
                {socialsData.instagram && (
                    <a
                        href={socialsData.instagram}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.socialIcon}
                    >
                        <FaInstagram aria-label='Instagram' />
                    </a>
                )}
                {/* {socialsData.telegram && (
                    <a
                        href={socialsData.telegram}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.socialIcon}
                    >
                        <FaTelegram aria-label='Telegram' />
                    </a>
                )} */}
                {socialsData.facebook && (
                    <a
                        href={socialsData.facebook}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.socialIcon}
                    >
                        <FaFacebook aria-label='Facebook' />
                    </a>
                )}
                {socialsData.twitter && (
                    <a
                        href={socialsData.twitter}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.socialIcon}
                    >
                        <FaTwitter aria-label='Twitter' />
                    </a>
                )}
                {socialsData.github && (
                    <a
                        href={socialsData.github}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.socialIcon}
                    >
                        <FaGithub aria-label='GitHub' />
                    </a>
                )}
            </div>
            <div className='visitsDiv'>
                <FaEye id='viewLogo' />
                <p onLoad={totalView()} id="visits"></p>
            </div>
            <div className='footer-text'>
                <p style={{ color: theme.tertiary }}>
                    &copy; 2022 <a href="https://futuristicai.netlify.app">{shortname(headerData.name)}</a> </p>
                <span style={{ color: theme.primary, margin: '0 0.5rem -1rem 0.5rem' }}>
                    ❤
                </span>
                <p>All rights reserved. </p>
            </div>
        </div>
    )
}

export default Footer

