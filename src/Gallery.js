import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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
        margin: theme.spacing(1),
        textAlign: 'center',
    },
    description: {
        textAlign: 'justify',
    },
    tomato: {
        minHeight: theme.spacing(40),
        backgroundImage: `url(${TomatoImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    ruler: {
        minHeight: theme.spacing(40),
        backgroundImage: `url(${RulerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    beacon: {
        minHeight: theme.spacing(40),
        backgroundImage: `url(${BeaconImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    item: {
        border: '1px solid',
        padding: theme.spacing(4),
    },
}));

function Gallery() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <NavBar />
            <div className={classes.section}>
                <Container maxWidth="sm">
                    <Typography variant='h4' className={classes.title}>
                        Lit Codes🖼️
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description} paragraph>
                        Below you can find a few examples of projects that are developed by Lit Codes and are available on GitHub.
                    </Typography>
                </Container>
            </div>
            <Divider />
            <div className={classes.section}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Container className={classes.item}>
                                <Typography variant='h4' className={classes.title}>
                                    Tomato🍅
                                </Typography>
                                <Typography variant="subtitle1" className={classes.description} paragraph>
                                    A timer based on the Pomodoro technique, works without sign-up and syncs between all of your devices.
                                </Typography>
                                <Box className={classes.tomato}></Box>
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Container className={classes.item}>
                                <Typography variant='h4' className={classes.title}>
                                    Sizable📏
                                </Typography>
                                <Typography variant="subtitle1" className={classes.description} paragraph>
                                    Create an interactive model of real-life re-sizable objects
                                </Typography>
                                <Box className={classes.ruler}></Box>
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Container className={classes.item}>
                                <Typography variant='h4' className={classes.title}>
                                    Beacon🚨
                                </Typography>
                                <Typography variant="subtitle1" className={classes.description} paragraph>
                                    Subscribe to vulnerabilities on you favorite package manager and get notified based on the severity.
                                </Typography>
                                <Box className={classes.beacon}></Box>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Divider />
            <Footer />
        </React.Fragment>
    );
}

export default Gallery;
