/* React */
import React from 'react';
/* Material UI Components */
import { makeStyles } from '@material-ui/core/styles';
/* Custom Components */
import Header from './Header';
import Hero from './Hero';
import WhyUs from './WhyUs';
import Products from './Products';
import Contact from './Contact';
import Community from './Community';
import Articles from './Articles';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.default,
        color: theme.palette.primary.text,
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Hero />
            <WhyUs />
            <Products />
            <Contact />
            <Community />
            <Articles />
            <Footer />
        </div>
    );
}

export default Home;
