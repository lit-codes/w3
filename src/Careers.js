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
    careerSection: {
        border: '1px solid',
        padding: theme.spacing(2),
    },
    title: {
        margin: theme.spacing(1),
        textAlign: 'center',
    },
    description: {
        textAlign: 'justify',
    },
}));

function Careers() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <NavBar />
            <div className={classes.section}>
                <Container maxWidth="sm">
                    <Typography variant='h4' className={classes.title}>
                        Be Lit 🔥
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description} paragraph>
                        On this page, you can see a few positions we need right now, but if you can't find your title on this page, we may still need you, we just don't know it yet. So why not introduce yourself by sending an email to jobs@lit.codes?
                    </Typography>
                </Container>
            </div>
            <Divider />
            <div className={classes.section}>
                <Container maxWidth="sm">
                    <div className={classes.careerSection}>
                        <Typography variant='h4' className={classes.title}>
                            Graphic Designer✎
                        </Typography>
                        <Typography variant="subtitle1" className={classes.description} paragraph>
                        Do you think about creating stuff all the time? Do you have a passion for colors? Does it bother you when a text is hard to read because of a bad choice of font?
Come on and bring your colors to Lit Codes, just drop us an email at jobs@lit.codes and tell us
                        </Typography>
                        <Divider />
                        <Typography variant='h4' className={classes.title}>
                            Front-end💻
                        </Typography>
                        <Typography variant="subtitle1" className={classes.description} paragraph>
                            Do you like turning imagination into reality? Is learning your passion? Do you enjoy solving complex problems? Do you think CSS is hard?
Show us your work, tell us about your dreams and passions. We'd love to meet, so why not send us an email? jobs@lit.codes
                        </Typography>
                        <Divider />
                        <Typography variant='h4' className={classes.title}>
                            Back-end☁️
                        </Typography>
                        <Typography variant="subtitle1" className={classes.description} paragraph>
                            Do you know your way around APIs? Are databases an important part of your toolbox? Do you enjoy working with terminal?
Tell us about the projects you have done so far and the problems you enjoy solving. Send us an email at  jobs@lit.codes
                        </Typography>
                        <Divider />
                    </div>
                </Container>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Careers;
