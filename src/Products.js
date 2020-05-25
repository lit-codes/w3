/* React */
import React, { useEffect, useRef } from 'react';
/* Material UI Components */
import { makeStyles } from '@material-ui/core/styles';
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
    productsContainer: {
        marginTop: theme.spacing(16),
    },
    productsBackground: {
        backgroundColor: theme.palette.primary.light,
    },
    description: {
        width: '60%',
    },
    subtitle: {
        marginTop: theme.spacing(4),
    },
    productBox: {
        paddingBottom: theme.spacing(16),
    },
    products: {
        marginTop: theme.spacing(8),
    },
    icon: {
        float: 'left',
        marginRight: theme.spacing(4),
        paddingBottom: theme.spacing(16),
    },
    subtitle: {
        overflow: 'auto',
    },
    link: {
        position: 'absolute',
        marginTop: -theme.spacing(16),
    },
}));

function Product() {
    const productsDefcriptionRef = useRef();
    const icon1Ref = useRef();
    const icon2Ref = useRef();
    const icon3Ref = useRef();
    const product1Ref = useRef();
    const product2Ref = useRef();
    const product3Ref = useRef();
    const classes = useStyles();

    useEffect(() => {
        animate(productsDefcriptionRef.current).fadeIn();
        animate(icon1Ref.current, { skipStart: 0.0 }).fadeIn().moveRight();
        animate(icon2Ref.current, { skipStart: 0.5 }).fadeIn().moveRight();
        animate(icon3Ref.current, { skipStart: 0.7 }).fadeIn().moveRight();
        animate(product1Ref.current, { skipStart: 0.0 }).fadeIn();
        animate(product2Ref.current, { skipStart: 0.5 }).fadeIn();
        animate(product3Ref.current, { skipStart: 0.7 }).fadeIn();
    }, []);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" className={classes.productsBackground}>
            <div className={classes.link} id="products"></div>
            <Container maxWidth="lg" className={classes.productsContainer}>
                <Box ref={productsDefcriptionRef}>
                    <Typography variant="h3" className={classes.title}>
                        We Provide Reliable Products
                    </Typography>
                    <Typography variant="subtitle1" className={classes.description}>
                        We offer a range of services and products that are reliable
                        and ready-to-use. Tell us about your projects and we will
                        make them for you.
                    </Typography>
                </Box>
                <Grid container align="stretch" spacing={4} className={classes.products}>
                    <Grid item xs={4}>
                        <Box className={classes.productBox} >
                            <img ref={icon1Ref} src={FlashIcon} className={classes.icon} />
                            <Box ref={product1Ref} >
                                <Typography variant="h4" className={classes.paperTitle}>
                                    Ready-to-use
                                </Typography>
                                <Typography variant="subtitle1" className={classes.subtitle}>
                                    Ready-to-use software, with zero or minimum configuration to get started
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <img ref={icon2Ref} src={FlashIcon} className={classes.icon} />
                        <Box className={classes.productBox} >
                            <Box ref={product2Ref} >
                                <Typography variant="h4" className={classes.paperTitle}>
                                    Enterprise
                                </Typography>
                                <Typography variant="subtitle1" className={classes.subtitle}>
                                    Reliable free software that is made for
                                    businesses
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <img ref={icon3Ref} src={FlashIcon} className={classes.icon} />
                        <Box className={classes.productBox} >
                            <Box ref={product3Ref} >
                                <Typography variant="h4" className={classes.paperTitle}>
                                    Tailor made
                                </Typography>
                                <Typography variant="subtitle1" className={classes.subtitle}>
                                    Every software is unique, we will turn your
                                    specifications into ready-to-use software
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Product;
