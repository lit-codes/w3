import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import HeroImage from './images/HeroImage.jpg';
import TomatoImage from './images/TomatoImage.png';
import RulerImage from './images/RulerImage.jpg';
import BeaconImage from './images/BeaconImage.jpg';
import NavBar from './NavBar';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
    section: {
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        justifyContent: 'center',
    },
    title: {
        margin: theme.spacing(2),
        textAlign: 'center',
    },
    description: {
        textAlign: 'justify',
    },
}));

function About() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <NavBar />
            <div className={classes.section}>
                <Container maxWidth="sm">
                    <Typography variant='h4' className={classes.title}>
                        Lit Codes🔥
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description} paragraph>
                        Have you ever had an idea and wondered how it would look like in reality? Are you a startup looking to integrate great developers into your team to get things going?
                    </Typography>
                    <Typography variant="h5" className={classes.title} paragraph>
                        <Link to='/contact-us'>Talk to us</Link> about your ideas.
                    </Typography>
                </Container>
            </div>
            <Divider />
            <div className={classes.section}>
                <Container maxWidth="sm">
                    <Typography variant='h4' className={classes.title}>
                        Philosophy🤔
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description} paragraph>
                        Lit Codes is founded by software developers passionate about both Open Source and providing good software services.

More oftentimes than not we see that OSS projects get abandoned after the initial success (typically because the main developer is burnt out or don't have time to work on the project anymore). This makes it harder for startups and other companies to trust OSS solution as long-term reliable tools.

Tools like React, Angular, and Flutter have proven to be adopted because of their reputable creators.

Lit Codes are secure, fast and reliable by design, and they will get the support and attention they deserve.
                    </Typography>
                </Container>
            </div>
            <Divider />
            <div className={classes.section}>
                <Container maxWidth="sm">
                    <Typography variant='h4' className={classes.title}>
                        Location🌐
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description} paragraph>
                        Lit Codes is a remote-first global company, in other words, we are everywhere.

Lit Coders chose the digital nomad lifestyle, or are parents who prefer to spend more time with their kids, or maybe people that prefer the comfort of their home rather than working in a noisy open-office environment.

If you have a place to stay, and you have a laptop connected to the internet, you can be a Lit Coder.
                    </Typography>
                </Container>
            </div>
            <Divider />
            <div className={classes.section}>
                <Container maxWidth="sm">
                    <Typography variant='h4' className={classes.title}>
                        Join us!💪
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description} paragraph>
                        Are you passionate about good quality OSS and you share our vision? Then why wait? Send us your resume at jobs@lit.codes, or check our <Link to='/careers'>careers</Link> page for open positions.
                    </Typography>
                </Container>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default About;
