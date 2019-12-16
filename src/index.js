/* React and its related libs */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
/* Load the whole roboto font, may not be very optimized */
import 'typeface-roboto';
/* Better CSS suppport for browsers, some good defaults */
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar';
import UnderConstruction from './UnderConstruction';

function App(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            {
                document.location.hash === '#show-me'
                ? <NavBar />
                : <UnderConstruction />
            }
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
