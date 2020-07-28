import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
class IndexLayout extends Component {
  render() {
    const { routes } = this.props
    return (
      <>
        <Switch>
          {routes.map(route => {
            return (
              <Route
                key={route.path}
                path={route.path}
                render={props => <route.component {...props} routes={route.routes || []} />}
              />
            );
          })}
        </Switch>
      </>
    )
  }
}

export default IndexLayout;