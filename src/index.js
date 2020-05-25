/* IE support */
import 'babel-polyfill';
/* React */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
/* Better CSS suppport for browsers, some good defaults */
import CssBaseline from '@material-ui/core/CssBaseline';
/* Material UI Theme */
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
/* Pages */
import Favicon from './images/Favicon.png';
import Home from './Home';

const palette = {
    primary: {
        main: '#212121',
        light: '#484848',
        dark: '#000000',
        text: '#cccccc',
        secondTextColor: '#ffffff',
    },
    secondary: {
        main: '#ffab04',
        light: '#ffdd71',
        dark: '#c77c02',
        text: '#000000',
        secondTextColor: '#333333',
    },
    background: {
        default: '#212121',
    },
};

const theme = createMuiTheme({
    palette,
    typography: {
        h2: {
            color: palette.primary.secondTextColor,
        },
        h3: {
            fontWeight: '200',
            color: palette.primary.secondTextColor,
        },
        h4: {
            fontWeight: '100',
            color: palette.primary.secondTextColor,
        },
    },
    overrides: {
        MuiMobileStepper: {
            root: {
                justifyContent: 'center',
                background: 'transparent',
            },
            dot: {
                backgroundColor: palette.primary.text,
                width: '12px',
                height: '12px',
            },
            dotActive: {
                backgroundColor: palette.secondary.dark,
            },
        },
        MuiSvgIcon: {
            root: {
                color: palette.secondary.dark,
                width: '4rem',
                height: '4rem',
            },
        },
        MuiFormLabel: {
            root: {
                color: palette.primary.text,
            },
        },
        MuiInputBase: {
            input: {
                color: palette.primary.secondTextColor,
            },
        },
        MuiOutlinedInput: {
            root: {
                backgroundColor: palette.primary.light,
                filter: 'brightness(120%)',
                borderRadius: '4px',
            },
        },
    },
});

function App(props) {
    useEffect(() => {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = Favicon;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, []);

    return (
        <NoSsr>
            <CssBaseline />
            <MuiThemeProvider theme = { theme }>
                <Home />
            </MuiThemeProvider>
        </NoSsr>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
