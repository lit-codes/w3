/* React and its related libs */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
/* Load the whole roboto font, may not be very optimized */
import 'typeface-roboto';
/* Better CSS suppport for browsers, some good defaults */
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './Home';
import About from './About';
import Careers from './Careers';
import UnderConstruction from './UnderConstruction';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#311b92',
            light: '#6746c3',
            dark: '#000063',
            text: '#ffffff',
        },
        secondary: {
            main: '#d1c4e9',
            light: '#fff7ff',
            dark: '#a094b7',
            contrastText: '#000000',
        },
    },
    typography: {
        useNextVariants: true
    }
});

function App(props) {
    return (
        <BrowserRouter>
            <CssBaseline />
           <MuiThemeProvider theme = { theme }>
                <Route exact path='/' component={UnderConstruction} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/careers' component={Careers} />
            </MuiThemeProvider>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
