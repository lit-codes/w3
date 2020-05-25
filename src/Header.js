/* React */
import React, { useEffect, useRef } from 'react';
/* Material UI Components */
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
/* Custom Components */
import FireBackground from './images/FireBackground.jpg';
import Logo from './images/Logo.svg';
import Links from './Links';
import { animate } from './Animation';

const useStyles = makeStyles(theme => ({
    transparentAppBar: {
        background: 'transparent',
        boxShadow: 'none',
    },
    logo: {
        width: '7rem',
    },
}));

function Header() {
    const toolbarRef = useRef();
    const classes = useStyles();

    useEffect(() => {
        window.addEventListener('scroll', e => {
            if (e.target.scrollingElement.scrollTop === 0) {
                toolbarRef.current.classList.add(classes.transparentAppBar);
            } else {
                toolbarRef.current.classList.remove(classes.transparentAppBar);
            }
        });
    }, []);

    return (
        <AppBar position="fixed" ref={toolbarRef} className={classes.transparentAppBar}>
            <Toolbar>
                <Box flexGrow={1}>
                    <img src={Logo} className={classes.logo}/>
                </Box>
                <Links />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
