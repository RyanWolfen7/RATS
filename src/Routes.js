import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainView from './components/MainView/MainView'

export default () => {
    return (
        <Switch>
            <Route
                component={MainView}
                exact
                path={'/'}
            />
        </Switch>
    )
}