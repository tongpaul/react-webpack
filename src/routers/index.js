import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import routes from './router.config'

class Index extends Component {
    render() {
        return (
            <Router>

                <Switch>
                    <Redirect path='/' exact={true} to='/index' />
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path}
                            render={props => <route.component {...props} routes={route.routes} parentRoute={route} />}
                        />
                    ))}
                </Switch>

            </Router>
        )
    }
}
export default Index