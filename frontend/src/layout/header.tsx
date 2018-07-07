import { AppBar, Tab, Tabs } from '@material-ui/core';
import * as React from 'react';
import { Component, MouseEvent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { IRoute, routes } from '../router';

interface HeaderProps extends RouteComponentProps<{}> {}

class Header extends Component<HeaderProps> {

  render() {
    return (
      <AppBar position="static" color="primary">
        <Tabs value={this.props.location.pathname}>
          {
            routes.map((route, index) =>
              <Tab
                value={route.path}
                key={index}
                label={route.label}
                onClick={event => this.handleTabClick(event, route)}
              />
            )
          }
        </Tabs>
      </AppBar>
    );
  }

  private handleTabClick(event: MouseEvent, route: IRoute) {
    this.props.history.push(route.path);
  }
}

export default withRouter(Header);
