import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import settings from './componentes/settings'


const App = () => {
    return (
        <Router>

            <Switch>
                <Route exact path="/" component={settings} />
            </Switch>
        </Router>
    )
}

export default App
