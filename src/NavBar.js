import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { pages } from './data/toolbar';
import HamburgerMenu from './HamburgerMenu';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    home: {
        color: theme.palette.primary.text,
        marginLeft: theme.spacing(1),
    },
    link: {
        marginRight: theme.spacing(2),
        color: theme.palette.primary.text,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
}));

function NavBar() {
    const classes = useStyles();

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position='static'>
                    <Toolbar>
                        <HamburgerMenu onClick={() => setIsOpen(!isOpen)} />
                        {pages.keys().map((text, index) => (
                            <Link to={pages[text]} className={classes.link} key={text}>{text}</Link>
                        ))}
                    </Toolbar>
                </AppBar>
            </div>
            <SideDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </React.Fragment>
    );
}

export default NavBar;
