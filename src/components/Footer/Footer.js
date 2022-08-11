import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'
import { makeStyles } from '@material-ui/core/styles';
import {
    FaTwitter,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';
import { socialsData } from '../../data/socialsData';

function Footer() {

    const shortname = (name) => {
        if(name.length > 10) {
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
                backgroundColor: theme.tertiary,
            },
        }
    }));
    const classes = useStyles();

    return (
        <div className="footer" style={{ backgroundColor: theme.secondary }}>
            <div className='socialmedia-icons'>
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
            <p style={{color: theme.tertiary}}>
                &copy; 2022 <a href="https://futuristicai.netlify.app">{shortname(headerData.name)}</a> 
                <span style={{color: theme.primary, margin: '0 0.5rem -1rem 0.5rem'}}>
                    ❤
                </span>
               All rights reserved.
            </p>
        </div>
    )
}

export default Footer

