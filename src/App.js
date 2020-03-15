import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import dashboard from './componentes/dashboard'
import settings from './componentes/settings'
import reports from './componentes/reports'
import reportsId from './componentes/reportsId'
import Page404 from './componentes/page404'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/dashboard" component={dashboard} />
                <Route exact path="/settings" component={settings} />
                <Route exact path="/reports/:id/:userid?" component={reportsId} />
                <Route exact path="/reports" component={reports} />
                <Route component={Page404} />
            </Switch>
        </Router>
    )
}

export default App
