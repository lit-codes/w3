import React from 'react';
/* Better CSS suppport for browsers, some good defaults */
import Paper from '@material-ui/core/Paper';
import UnderConstructionImage from './UnderConstructionImage.jpg';

const styles = {
    background: {
        backgroundImage: `url(${UnderConstructionImage})`,
        position: 'fixed',
        height: '100%',
        width: '100%',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'khaki',
        textAlign: 'center',
        fontSize: 'xx-large',
        textShadow: '1px 1px black',
    },
};

function UnderConstruction() {
    return (
        <Paper style={styles.background}>
            <p style={styles.text}>
                🚧 Under Construction 🚧
                <br />
                Please come back in a week or two.
            </p>
        </Paper>
    );
}

export default UnderConstruction;
