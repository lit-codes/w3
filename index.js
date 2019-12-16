/* React and its related libs */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
/* Load the whole roboto font, may not be very optimized */
import 'typeface-roboto';
/* Better CSS suppport for browsers, some good defaults */
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar';
console.log(NavBar);

function App(props) {
    return (
        <React.fragment>
            <CssBaseline />
            <NavBar />
        </React.fragment>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
