import * as React from 'react';
import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectDate from '../components/select-date';
import Footer from './footer';

import '../styles/app.css';
import Header from './header';

interface IApp {}

class Application extends Component<IApp, IApp> {

  render() {
    return (
      <MuiThemeProvider>
        <Header />
        <div className="container">
          <SelectDate />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Application;