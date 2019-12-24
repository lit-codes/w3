import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    subscribe: {
    },
    email: {
        width: '100%',
    },
    submit: {
        width: '100%',
    },
}));

function Subscribe() {
    const classes = useStyles();

    return (
        <div className={classes.subscribe}>
            <form action="">
                <Grid container>
                    <Grid item xs={8} sm={9}>
                        <Input type="email" placeholder="username@example.com" className={classes.email} />
                    </Grid>
                    <Grid item xs={4} sm={3}>
                        <Button type="submit" className={classes.submit}>Subscribe</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default Subscribe;
