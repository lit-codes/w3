/* React */
import React, { useEffect, useRef } from 'react';
/* Material UI Components */
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
/* Custom Components */

const useStyles = makeStyles(theme => ({
    transparentAppBar: {
        background: 'transparent',
        boxShadow: 'none',
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.text,
    },
}));

function Links() {
    const classes = useStyles();

    return (
        <>
            <Button className={classes.link} color="inherit" href="#about">About</Button>
            <Button className={classes.link} color="inherit" href="#create">Contact Us</Button>
            <Button className={classes.link} color="inherit" href="#join">Join Us</Button>
            <Button className={classes.link} color="inherit" target="_blank" href="https://blog.lit.codes/">Blog</Button>
        </>
    );
}

export default Links;
