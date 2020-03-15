import React, { useState } from 'react'
import Navigation from './navigation'
import { Button } from 'react-bootstrap'
import { useModal } from '../hooks/useModal'
import Modal_ from './modal'

const Settings = () => {
    const [isShowing, toggle] = useModal()
    const [text, setText] = useState('hola de nuevo')

    return (
        <div>
            <Navigation />
            <>
                <Button variant="primary" onClick={toggle}>
                    Launch demo modal
                </Button>
                <Modal_ isShowing={isShowing} toggle={toggle} text={text}></Modal_>
            </>
        </div>
    )
}

export default Settings
