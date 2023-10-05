import React, {useEffect, useState} from 'react';
import { Table, Button} from 'semantic-ui-react';
import { Link} from 'react-router-dom';
import axios from 'axios';



export default function ReadRestaurantes () {
    const [ APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:2031/restaurantes/getRestauran')
        .then((response) => {
            console.log(response.data);
            setAPIData(response.data);
        });
    }, []);

    const setData = (data) => {
        localStorage.setItem('ID', data._id);
        localStorage.setItem('nombre', data.nombre);
        localStorage.setItem('tipo', data.tipo);
        localStorage.setItem('direccion', data.direccion);
        localStorage.setItem('telefono', data.telefono);
        localStorage.setItem('horario', data.horario);
        localStorage.setItem('rating', data.rating);
    };

    const oneDelete = (_id) => {
        axios.delete(`http://localhost:2031/restaurantes/deleteRestauran/${_id}`)
        .then((response) => {
      console.log('elemento eliminado;', response.data);
      window.location.reload();
    })
    .catch((error) => {
        console.error('Error al eliminar el elemento:', error);
      });
    };


     return (
        <div>
        <Table singleLine>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Tipo</Table.HeaderCell>
                <Table.HeaderCell>Direccion</Table.HeaderCell>
                <Table.HeaderCell>Telefono</Table.HeaderCell>
                <Table.HeaderCell>Horario</Table.HeaderCell>
                <Table.HeaderCell>Rating</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
            <Table.Body>
            {APIData.map((data) => (
                <Table.Row key={data._id}>
                <Table.Cell>{data.nombre}</Table.Cell>
                <Table.Cell>{data.tipo}</Table.Cell>
                <Table.Cell>{data.direccion}</Table.Cell>
                <Table.Cell>{data.telefono}</Table.Cell>
                <Table.Cell>{data.horario}</Table.Cell>
                <Table.Cell>{data.rating}</Table.Cell>
                <Table.Cell>
                    <Link to="/updateRestaurantes">
                    <Button onClick={() => setData(data)}>Actualizar</Button>
                    </Link>
                    <Button onClick={() => oneDelete(data._id)}>Eliminar</Button>
                </Table.Cell>
                </Table.Row>
            ))}
            </Table.Body>
        </Table>
        </div>
    );
}