import React, { } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const navigation = props => {
    const { history, location, match } = props

    // console.log('location', location)
    // console.log('match', match)

    return (
        <React.Fragment>
            <Button className='btn-danger'
                onClick={() => {
                    history.push('/reports/123', {id_ : 34})
                }}
            >
                got to Settings
            </Button>
            <Button
                onClick={() => {
                    history.goBack()
                }}
            >
                got back
            </Button>
            <Button
                onClick={() => {
                    history.goForward()
                }}
            >
                go forward
            </Button>

            <ul>
                <li>
                    <Link to={'/dashboard'}>Dashboard</Link>
                </li>
                <li>
                    <Link to={'/settings'}>Settings</Link>
                </li>
                <li>
                    <Link to={'/reports'}>Reports</Link>
                </li>
                <li>
                    <Link to={'/reports/123'}>Reports ID</Link>
                </li>
            </ul>

            {false && <Redirect to="test" />}
        </React.Fragment>
    )
}

export default withRouter(navigation)
