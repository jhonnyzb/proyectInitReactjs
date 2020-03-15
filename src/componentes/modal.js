import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const Modal_ = ({ isShowing, toggle, text }) => {
    return (
        <>
            <Modal show={isShowing} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{text}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggle}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={toggle}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modal_
