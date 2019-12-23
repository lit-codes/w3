import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { pages } from './data/toolbar';

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
        color: theme.palette.primary.text,
        backgroundColor: theme.palette.primary.main,
    },
    link: {
        color: theme.palette.primary.text,
    }
}));


function SideDrawer({isOpen, setIsOpen}) {
    const classes = useStyles();

    return (
        <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
            <div
                className={classes.list}
                role="presentation"
                onClick={() => setIsOpen(false)}
                onKeyDown={() => setIsOpen(false)}
            >
                <List>
                    {pages.keys().map((text, index) => (
                        <ListItem button key={text}>
                            <Link to={pages[text]} className={classes.link}>{text}</Link>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    );
}

export default SideDrawer;
