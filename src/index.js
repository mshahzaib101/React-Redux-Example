import React from 'react';
import ReactDOM from 'react-dom';
// import App from './containers/app/App';
import './index.css';
import store from './store'
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/todo'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red900
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    canvasColor: red900
    
    ,
  },
  
});

ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <App />
    </div>
    </MuiThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);
