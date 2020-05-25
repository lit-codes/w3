/* React */
import React, { useEffect, useRef } from 'react';
/* Material UI Components */
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ScheduleIcon from '@material-ui/icons/Schedule';
/* Custom Components */
import Benchmarking from './images/Benchmarking.jpg';
import Shell from './images/Shell.jpg';
import Chef from './images/Chef.jpg';
import { animate } from './Animation';

const useStyles = makeStyles(theme => ({
    articlesBackground: {
    },
    articlesContainer: {
        marginTop: theme.spacing(16),
    },
    articles: {
        marginTop: theme.spacing(8),
    },
    media: {
        height: '200px',
    },
    time: {
        width: '20px',
        height: '20px',
        marginRight: theme.spacing(1),
        color: theme.palette.primary.text,
    },
    card: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.text,
    },
    readMore: {
        float: 'right',
    },
    actions: {
        justifyContent: 'space-between',
    },
}));

function BigScreen() {
    const titleRef = useRef();
    const card1Ref = useRef();
    const card2Ref = useRef();
    const card3Ref = useRef();
    const classes = useStyles();

    useEffect(() => {
        animate(titleRef.current).fadeIn();
        animate(card1Ref.current).fadeIn().moveUp(20);
        animate(card2Ref.current).fadeIn().moveUp(40);
        animate(card3Ref.current).fadeIn().moveUp(80);
    }, []);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" className={classes.articlesBackground}>
            <Container maxWidth="md" className={classes.articlesContainer}>
                <Box display="flex" justifyContent="center" ref={titleRef}>
                    <Typography variant="h3" className={classes.title}>
                        Latest Articles
                    </Typography>
                </Box>
                <Grid container align="stretch" spacing={4} className={classes.articles}>
                    <Grid item xs={4}>
                        <Card className={classes.card} ref={card1Ref}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={Benchmarking}
                                    title="An introduction to benchmarking and profiling"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Benchmarking
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        An introduction to benchmarking and profiling
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.actions}>
                                <Box display="flex">
                                    <ScheduleIcon className={classes.time} /> 05/15/2020
                                </Box>
                                <Button color="secondary" variant="contained" className={classes.readMore} target="_blank" href="https://blog.lit.codes/intro-to-benchmarking-and-profiling/">
                                    Read Here
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.card} ref={card2Ref}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={Shell}
                                    title="Hacking with SSH"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Hacking with SSH
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        SSH is more than a login shell, learn to do more with SSH
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.actions}>
                                <Box display="flex">
                                    <ScheduleIcon className={classes.time} /> 05/05/2020
                                </Box>
                                <Button color="secondary" variant="contained" className={classes.readMore} target="_blank" href="https://blog.lit.codes/hacking-with-ssh/">
                                    Read Here
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.card} ref={card3Ref}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={Chef}
                                    title="Compiling Chef"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Compiling Chef
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Chef is a popular IaC tool, learn to compile it for ARM
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.actions}>
                                <Box display="flex">
                                    <ScheduleIcon className={classes.time} /> 04/29/2020
                                </Box>
                                <Button color="secondary" variant="contained" className={classes.readMore} target="_blank" href="https://blog.lit.codes/how-to-compile-chef-from-source/">
                                    Read Here
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

function SmallScreen() {
    return (<div></div>);
}

function Articles() {
    const isBigScreen = useMediaQuery('(min-width:1366px)');
    return (
        isBigScreen ? <BigScreen /> :  <SmallScreen />
    );
}


export default Articles;
