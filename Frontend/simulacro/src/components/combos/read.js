import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2031/combos/getCombo').then((response) => {
      console.log(response.data);
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    localStorage.setItem('ID', data._id);
    localStorage.setItem('Descripcion', data.descripcion);
    localStorage.setItem('Precio', data.precio);
    localStorage.setItem('Comida', data.comida);
    localStorage.setItem('Bebida', data.bebida);
  };

  const oneDelete = (_id) => {
    axios.delete(`http://localhost:2031/combos/deleteCombo/${_id}`)
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
            <Table.HeaderCell>Descripcion</Table.HeaderCell>
            <Table.HeaderCell>Precio</Table.HeaderCell>
            <Table.HeaderCell>Comida</Table.HeaderCell>
            <Table.HeaderCell>Bebida</Table.HeaderCell>
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell>{data.descripcion}</Table.Cell>
              <Table.Cell>{data.precio}</Table.Cell>
              <Table.Cell>{data.comida}</Table.Cell>
              <Table.Cell>{data.bebida}</Table.Cell>
              <Table.Cell>
                <Link to="/update">
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

