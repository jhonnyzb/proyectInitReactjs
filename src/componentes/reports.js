import React, { useState, useEffect } from 'react'
import Navigation from './navigation'
import { consultaClientes } from '../request/request'
import FlatList from 'flatlist-react'
import { Spinner, Alert } from 'react-bootstrap'

const Reports = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        _getUser()
    }, [])

    const _getUser = async () => {
        let users = await consultaClientes()
        setUsers(users.data)
    }

    const RenderPerson = ({ item }) => {
        return (
            <Alert variant='danger'>
                {item.body}
            </Alert>
        )
    }

    const renderBlank = () => {
        return <Spinner animation="border" variant="primary" />
    }

    return (
        <div>
            <Navigation />
            <ul>
                <FlatList list={users} renderItem={<RenderPerson />} renderWhenEmpty={() => renderBlank()} />
                {/* <FlatList list={users} renderItem={(item, index) => renderPerson(item, index)} /> */}
            </ul>
        </div>
    )
}

export default Reports
