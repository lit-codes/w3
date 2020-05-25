/* React */
import React, { useEffect, useRef } from 'react';
/* Material UI Components */
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
/* Custom Components */
import FemaleDeveloper from './images/FemaleDeveloper.png';
import { animate } from './Animation';

const useStyles = makeStyles(theme => ({
    title: {
        width: '100%',
    },
    subtitle: {
        marginTop: theme.spacing(4),
        color: theme.palette.primary.text,
        width: '70%',
    },
    contactContainer: {
        marginLeft: theme.spacing(4),
        width: '75%',
        float: 'left',
    },
    contact: {
        color: theme.palette.primary.text,
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    femaleDeveloper: {
        marginTop: theme.spacing(16),
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '100%',
        backgroundSize: 'contain',
        height: '50vh',
        backgroundImage: `url('${FemaleDeveloper}')`,
    },
    link: {
        position: 'absolute',
        marginTop: -theme.spacing(16),
    },
    email: {
        textDecoration: 'none',
        color: theme.palette.primary.text,
    },
}));

function BigScreen() {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const classes = useStyles();

    useEffect(() => {
        animate(titleRef.current).fadeIn().moveUp(20);
        animate(descriptionRef.current).fadeIn().moveUp(20);
    }, []);

    const onSubmit = e => {
        console.log(e.target.name.value);
        e.preventDefault();
    };

    return (
        <Box className={classes.femaleDeveloper}>
            <div className={classes.link} id="create"></div>
            <Container className={classes.contactContainer}>
                <Box className={classes.contact}>
                    <Typography ref={titleRef} variant="h3" className={classes.title}>
                        Talk to us about your ideas.
                    </Typography>
                    <Typography ref={descriptionRef} variant="subtitle1" className={classes.subtitle}>
                        Every project is unique and deserves attention to its
                        requirements and possible ways of solving it. Contact
                        us so we can talk about how to turn your ideas into
                        reality. Drop us an email at <a className={classes.email} href="mailto:create@lit.codes?subject=Hi!" target="_blank">create@lit.codes</a>.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

function SmallScreen() {
    return (<div></div>);
}

function Contact() {
    const isBigScreen = useMediaQuery('(min-width:1366px)');
    return (
        isBigScreen ? <BigScreen /> :  <SmallScreen />
    );
}

export default Contact;
