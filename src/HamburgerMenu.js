import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    link: {
        color: (console.log(theme), theme.palette.grey[50]),
    },
    title: {
        flexGrow: 1,
    },
}));

function HamburgerMenu({onClick}) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={onClick}/>
            <Typography variant='h6' className={classes.title} onClick={onClick}>
                Lit Codes
            </Typography>
        </React.Fragment>
    );
}

export default HamburgerMenu;
