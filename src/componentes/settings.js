import React, { useState, useEffect } from 'react'

import { Button, CardDeck, Card, Table, Modal } from 'react-bootstrap'

import data from '../data/data.json'

const Settings = () => {
    const [nSucursales, setNsucursales] = useState([])
    const [nProductos, setNProductos] = useState([])
    const [lgShow, setLgShow] = useState(false)
    const [dataTiendas, setDataTiendas] = useState([])

    const [dataSucursales1, setDatasucurasales1] = useState([])
    const [dataProductos1, setdataProductos1] = useState([])

    useEffect(() => {
        setDataTiendas(data)
    }, [])

    const verSucursales = (id) => {
        let sucursales_ = data.filter((tienda) => tienda.idTienda === id)[0].sucursales
        setNsucursales(sucursales_)
        setDatasucurasales1(sucursales_)
    }

    const verProductos = (item) => {
        setNProductos(item.productos)
        setdataProductos1(item.productos)
        setLgShow(true)
    }

    const filtrarSucursales = (event) => {
        const newData = dataSucursales1.filter(function (item) {
            const itemData = item.nombreSucursal ? item.nombreSucursal.toUpperCase() : ''.toUpperCase()
            const textData = event.target.value.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        setNsucursales(newData)
    }

    const filtrarProductos = (event) => {
        const newData = dataProductos1.filter(function (item) {
            const itemData = item.categoria ? item.categoria.toUpperCase() : ''.toUpperCase()
            const textData = event.target.value.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        setNProductos(newData)
    }

    return (
        <div style={{ margin: 10, width: '90%' }}>
            <CardDeck style={{ marginTop: 20 }}>
                {dataTiendas.map((item, index) => {
                    return (
                        <Card>
                            <Card.Img variant="top" src={item.urlLogo} />
                            <Card.Body>
                                <Card.Text>{item.nombreTienda}</Card.Text>
                                <Card.Title>Numero de Productos</Card.Title>
                                <Card.Text>
                                    {item.sucursales.map((item, index) => {
                                        return item.productos.length
                                    })}
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        verSucursales(item.idTienda)
                                    }}
                                >
                                    Ver Sucursales
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </CardDeck>

            <div style={{ marginTop: 20 }}>
                <div style={{ marginTop: 20, width: '50%' }}>
                    <input placeholder="Buscar sucursales" className="form-control" onChange={(text) => filtrarSucursales(text)} />
                </div>
            </div>

            <div style={{ marginTop: 10 }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre Sucursal</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nSucursales.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.nombreSucursal}</td>
                                    <td>
                                        <Button onClick={() => verProductos(item)}>Ver Productos</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">Productos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{ marginTop: 20, width: '50%', marginBottom: 10 }}>
                            <input placeholder="Buscar producto por categoria" className="form-control" onChange={(text) => filtrarProductos(text)} />
                        </div>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Categoria</th>
                                    <th>Imagen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nProductos.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.nombre}</td>
                                            <td>{item.precio}</td>
                                            <td>{item.cantidadDisponible}</td>
                                            <td>{item.categoria}</td>
                                            <td>
                                                <img src={item.imagen} style={{ width: 60, height: 60 }} alt=""></img>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default Settings
