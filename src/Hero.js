/* React */
import React, { useEffect, useRef } from 'react';
/* Material UI Components */
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
/* Custom Components */
import FireBackground from './images/FireBackground.jpg';
import { animate } from './Animation';

const useStyles = makeStyles(theme => ({
    heroContainer: {
        background: `url('${FireBackground}')`,
        backgroundSize: 'cover',
        height: '100vh',
    },
    hero: {
        paddingTop: theme.spacing(16),
    },
    startButton: {
        padding: '12px 46px',
        color: theme.palette.secondary.text,
    },
    projectsButton: {
        padding: '12px 46px',
        color: '#ffffff',
    },
    startButtons: {
        marginTop: theme.spacing(5),
    },
    subtitle: {
        marginTop: theme.spacing(1),
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.text,
    },
}));

function WhyUs() {
    const titleRef = useRef();
    const subtitleRef = useRef();
    const buttonsRef = useRef();
    const classes = useStyles();

    useEffect(() => {
        animate(titleRef.current, { trigger: 'delay', delay: '100ms' }).fadeIn().moveUp(10);
        animate(subtitleRef.current, { trigger: 'delay', delay: '200ms' }).fadeIn().moveUp(20);
        animate(buttonsRef.current, { trigger: 'delay', delay: '400ms' }).fadeIn().moveUp(30);
    }, []);

    return (
        <Box className={classes.heroContainer}>
            <Container maxWidth='md'>
                <Grid container spacing={2} className={classes.hero}>
                    <Grid item md={9}>
                        <Typography ref={titleRef} variant="h2">
                            We are 🔥 coders!
                        </Typography>
                        <Typography ref={subtitleRef} variant="subtitle1" className={classes.subtitle}>
                            We build the future of the enterprise level and open source software, let us create your dream product or join our community of excellent developers.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container ref={buttonsRef} className={classes.startButtons}>
                    <Grid item xs={3}>
                        <Fab variant="extended" color="secondary" className={classes.startButton} href="#create">Let's create</Fab>
                    </Grid>
                    <Grid item xs={3}>
                        <Button className={classes.projectsButton} href="#join">Join us</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default WhyUs;
