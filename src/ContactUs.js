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
import Subscribe from './Subscribe';
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

function ContactUs() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <NavBar />
            <div className={classes.section}>
                <Container maxWidth="sm">
                    <Typography variant='h4' className={classes.title}>
                        Contact Us📧
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description} paragraph>
                        Every project is unique and deserves attention to its requirements and possible ways of solving it. Contact us so we can talk about how to turn your ideas into reality. Drop us an email at create@lit.codes.
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
                        Subscribe🔔
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description} paragraph>
                        We will send you a weekly newsletter about our new projects and blog posts, you can unsubscribe at any time.
                    </Typography>
                    <Subscribe />
                </Container>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default ContactUs;
