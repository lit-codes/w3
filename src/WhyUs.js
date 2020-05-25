/* React */
import React, { useEffect, useRef } from 'react';
/* Material UI Components */
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
/* Custom Components */
import MaleDeveloper from './images/MaleDeveloper.png';
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
    whyUsContainer: {
        marginRight: theme.spacing(16),
        width: '60%',
        float: 'right',
    },
    whyUs: {
        color: theme.palette.primary.text,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    paperTitle: {
        fontWeight: '100',
    },
    maleDeveloper: {
        marginTop: theme.spacing(16),
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: '500px',
        backgroundImage: `url('${MaleDeveloper}')`,
    },
    papers: {
        marginTop: theme.spacing(6),
    },
    paper: {
        background: theme.palette.primary.light,
        color: theme.palette.primary.text,
        width: '100%',
        height: '100%',
        padding: theme.spacing(4),
    },
    separator: {
        borderColor: theme.palette.secondary.dark,
        borderTop: '4px solid',
        width: '80%',
        marginLeft: '0px',
    },
    link: {
        position: 'absolute',
        marginTop: -theme.spacing(16),
    },
}));

function BigScreen() {
    const isTooSmall = useMediaQuery('(max-width:1366px)');
    const paperOneRef = useRef();
    const paperTwoRef = useRef();
    const paperThreeRef = useRef();
    const whyUsRef = useRef();
    const classes = useStyles();

    useEffect(() => {
        animate(whyUsRef.current).fadeIn();
        animate(paperOneRef.current).fadeIn().moveUp(20);
        animate(paperTwoRef.current).fadeIn().moveUp(40);
        animate(paperThreeRef.current).fadeIn().moveUp(60);
    }, []);

    return (
        isTooSmall ?
        <div></div> :
        <Box className={classes.maleDeveloper}>
            <div className={classes.link} id="about"></div>
            <Box className={classes.whyUsContainer}>
                <Box ref={whyUsRef} className={classes.whyUs}>
                    <Typography variant="h3" className={classes.title}>
                        Why choose us?
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        We are a team of experienced software developers. From
                        requirements to MVP to Prototypes to production, we are
                        with you every step of the way. 
                    </Typography>
                </Box>
                <Box className={classes.papers}>
                    <Grid container align="stretch" spacing={4}>
                        <Grid item xs={4}>
                            <Paper ref={paperOneRef} className={classes.paper} data-animate="fade-in">
                                <Typography variant="h4" className={classes.paperTitle}>
                                    Effective
                                </Typography>
                                <hr className={classes.separator}/>
                                <Typography variant="subtitle1">
                                    Lit Codes is all about getting things done well.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper ref={paperTwoRef} className={classes.paper}>
                                <Typography variant="h4" className={classes.paperTitle}>
                                    Hassle-free
                                </Typography>
                                <hr className={classes.separator}/>
                                <Typography variant="subtitle1">
                                    We take care of all the complexity of building
                                    great software so you don't have to.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper ref={paperThreeRef} className={classes.paper}>
                                <Typography variant="h4" className={classes.paperTitle}>
                                    Valuable
                                </Typography>
                                <hr className={classes.separator}/>
                                <Typography variant="subtitle1">
                                    Working with us is worth the time and the money.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

function SmallScreen() {
    return (<div></div>);
}

function WhyUs() {
    const isBigScreen = useMediaQuery('(min-width:1366px)');
    return (
        isBigScreen ? <BigScreen /> :  <SmallScreen />
    );
}

export default WhyUs;
