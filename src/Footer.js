/* React */
import React, { useEffect, useRef } from 'react';
/* Material UI Components */
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
/* Custom Components */
import FlashIcon from './images/FlashIcon.png';
import OSSIcon from './images/OSSIcon.png';
import PuzzleIcon from './images/PuzzleIcon.png';
import Links from './Links';
import { animate } from './Animation';

const useStyles = makeStyles(theme => ({
    footerContainer: {
        marginTop: theme.spacing(16),
        borderBottom: '1px solid #525252',
    },
    footerBackground: {
        background: 'linear-gradient(180deg, rgba(124, 124, 124, 0.0001) 8.74%, rgba(109, 109, 109, 0.279445) 61.87%, rgba(77, 77, 77, 0.865447) 108.47%, #464646 113.96%)',
    },
    description: {
        width: '60%',
    },
    title: {
        maxWidth: theme.spacing(32),
    },
    productBox: {
        paddingBottom: theme.spacing(16),
    },
    footer: {
        width: '100%',
        marginTop: theme.spacing(1),
        padding: theme.spacing(1),
        color: 'gray',
        fontSize: '1rem',
        textAlign: 'center',
        borderBottom: '8px solid #C77C03;',
    },
    footerLinks: {
        float: 'right',
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.text,
    },
}));

function BigScreen() {
    const footerDescriptionRef = useRef();
    const classes = useStyles();

    useEffect(() => {
        animate(footerDescriptionRef.current).fadeIn();
    }, []);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" className={classes.footerBackground}>
            <Container maxWidth="lg" className={classes.footerContainer}>
                <Box ref={footerDescriptionRef}>
                    <Typography className={classes.title}>
                        Lit Codes is a remote-first global community built for
                        passionate developers who are dedicated to life-long
                        learning and builing things.
                    </Typography>
                </Box>
                <Box className={classes.footerLinks}>
                    <Links />
                </Box>
            </Container>
            <footer className={classes.footer}>
                <span>© 2020 </span>
                <a className={classes.link} href="" target="_blank" rel="noopener noreferrer">Lit Codes</a>
            </footer>
        </Box>
    );
}

function SmallScreen() {
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="column" alignItems="center" className={classes.footerBackground}>
            <Container maxWidth="lg" className={classes.footerContainer}>
                <Box>
                    <Typography className={classes.title}>
                        Lit Codes is a remote-first global community built for
                        passionate developers who are dedicated to life-long
                        learning and building things.
                    </Typography>
                </Box>
                <Box className={classes.footerLinks}>
                    Join us at <a className={classes.link} href="mailto:new@lit.codes?subject=Hi!" target="_blank">new@lit.codes</a>
                </Box>
            </Container>
            <footer className={classes.footer}>
                <span>© 2020 </span>
                <a className={classes.link} href="" target="_blank" rel="noopener noreferrer">Lit Codes</a>
            </footer>
        </Box>
    );
}

function Footer() {
    const isBigScreen = useMediaQuery('(min-width:1366px)');
    return (
        isBigScreen ? <BigScreen /> :  <SmallScreen />
    );
}

export default Footer;
