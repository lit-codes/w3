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
    hero: {
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: theme.palette.primary.text,
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(15),
    },
    features: {
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
    gallery: {
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
    galleryTomato: {
        backgroundImage: `url(${TomatoImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: theme.spacing(20),
    },
    galleryRuler: {
        backgroundImage: `url(${RulerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: theme.spacing(20),
    },
    galleryBeacon: {
        backgroundImage: `url(${BeaconImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: theme.spacing(20),
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <NavBar />
            <div className={classes.hero}>
                <Container maxWidth="sm">
                    <Typography variant='h4' className={classes.title}>
                        Software Designed to Stay
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description} paragraph>
                        We provide a collection of the best software, with a vast variety of applications, ready to be used and tailor-made to your needs. Check our <Link to='/gallery'>Gallery</Link> out.
                    </Typography>

                </Container>
            </div>
            <div className={classes.features}>
                <Container maxWidth="sm">
                    <Typography variant='h4' className={classes.title}>
                        Product Features
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description} paragraph>
                        We offer a range of services and products that are reliable and ready-to-use. <Link to='/contact-us'>Tell us</Link> about your projects and we will make them for you.
                    </Typography>
                </Container>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item lg={4} md={6} xs={12}>
                            <Container maxWidth="xs">
                                <Typography variant='h6' className={classes.title}>
                                    Ready-to-use
                                </Typography>
                                <Typography variant="body2" className={classes.description} paragraph>
                                    Ready-to-use software, with zero or minimum configuration to get started
                                </Typography>
                            </Container>
                        </Grid>
                        <Grid item lg={4} md={6} xs={12}>
                            <Container maxWidth="xs">
                                <Typography variant='h6' className={classes.title}>
                                    Open Source
                                </Typography>
                                <Typography variant="body2" className={classes.description} paragraph>
                                    Reliable free software that is made and maintained by experienced developers
                                </Typography>
                            </Container>
                        </Grid>
                        <Grid item lg={4} md={6} xs={12}>
                            <Container maxWidth="xs">
                                <Typography variant='h6' className={classes.title}>
                                    Tailor made
                                </Typography>
                                <Typography variant="body2" className={classes.description} paragraph>
                                    Every software is unique, we will turn your software specifications into ready-to-use software
                                </Typography>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Divider />
            <div className={classes.gallery}>
                <Container maxWidth="sm">
                    <Typography variant='h4' className={classes.title}>
                        Gallery
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description} paragraph>
                        These are just a few product samples you can try right now. We can customize these products based on your needs. <Link to='/contact-us'>Contact us</Link> if you want a software tailor-made for you at affordable prices.
                    </Typography>
                </Container>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item lg={4} md={6} xs={12}>
                            <Link to="/gallery">
                                <Box maxWidth="xs" className={classes.galleryTomato}></Box>
                            </Link>
                        </Grid>
                        <Grid item lg={4} md={6} xs={12}>
                            <Link to="/gallery">
                                <Box maxWidth="xs" className={classes.galleryRuler}></Box>
                            </Link>
                        </Grid>
                        <Grid item lg={4} md={6} xs={12}>
                            <Link to="/gallery">
                                <Box maxWidth="xs" className={classes.galleryBeacon}></Box>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Divider />
            <Footer />
        </React.Fragment>
    );
}

export default Home;
