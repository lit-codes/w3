import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pages } from './data/toolbar';
import HamburgerMenu from './HamburgerMenu';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.light,
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
    },
    link: {
        marginRight: theme.spacing(2),
        color: theme.palette.secondary.text,
    },
}));

function Footer() {
    const classes = useStyles();

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <React.Fragment>
            <Box className={classes.root}>
                {pages.keys().map((text, index) => (
                    <Link to={pages[text]} className={classes.link} key={text}>{text}</Link>
                ))}
            </Box>
        </React.Fragment>
    );
}

export default Footer;
