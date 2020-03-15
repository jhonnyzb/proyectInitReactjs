import React, {  } from 'react'
import Navigation from './navigation'
import { Button } from 'react-bootstrap'
import { useInputChange } from '../hooks/useInput'

const Dashboard = () => {
    const [input, handleInputChange] = useInputChange()

    const  _sendLogin = () => {
        
        //console.log(input.password)
    }

    return (
        <div>
            <Navigation />
            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" onChange={handleInputChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" name="password" onChange={handleInputChange} />
                </div>
                <Button onClick={() => _sendLogin()}>Enviar </Button>
            </form>
        </div>
    )
}

export default Dashboard
