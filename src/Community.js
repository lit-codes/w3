/* React */
import React, { useEffect, useRef } from 'react';
/* Material UI Components */
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
/* Custom Components */
import FlashIcon from './images/FlashIcon.png';
import OSSIcon from './images/OSSIcon.png';
import PuzzleIcon from './images/PuzzleIcon.png';
import { animate } from './Animation';

const useStyles = makeStyles(theme => ({
    communityContainer: {
        marginTop: theme.spacing(16),
        marginBottom: theme.spacing(16),
    },
    communityBackground: {
        backgroundColor: theme.palette.primary.light,
    },
    description: {
        width: '60%',
    },
    community: {
        marginTop: theme.spacing(8),
    },
    icon: {
        float: 'left',
        marginRight: theme.spacing(4),
        paddingBottom: theme.spacing(16),
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
    const communityDefcriptionRef = useRef();
    const classes = useStyles();

    useEffect(() => {
        animate(communityDefcriptionRef.current).fadeIn();
    }, []);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" className={classes.communityBackground}>
            <div className={classes.link} id="join"></div>
            <Container maxWidth="lg" className={classes.communityContainer}>
                <Box ref={communityDefcriptionRef}>
                    <Typography variant="h3" className={classes.title}>
                        Join our community of developers
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description}>
                        From educational material to mentorship, we help each other to build better software. Tell us about yourself at <a className={classes.email} href="mailto:new@lit.codes?subject=Hi!" target="_blank">new@lit.codes</a>.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

function SmallScreen() {
    return (<div></div>);
}

function Community() {
    const isBigScreen = useMediaQuery('(min-width:1366px)');
    return (
        isBigScreen ? <BigScreen /> :  <SmallScreen />
    );
}

export default Community;
