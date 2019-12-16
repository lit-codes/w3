import React from 'react';
/* Better CSS suppport for browsers, some good defaults */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function NavBar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography inherit="title" color="inherit">
                        Lit codes
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
