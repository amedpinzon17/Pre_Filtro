import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ReadBurguers() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2031/burguers/getHam').then((response) => {
      console.log(response.data);
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    localStorage.setItem('ID', data._id);
    localStorage.setItem('Nombre', data.nombre);
    localStorage.setItem('Precio', data.precio);
    
  };

  const oneDelete = (_id) => {
    axios.delete(`http://localhost:2031/burguers/deleteHam/${_id}`);
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Precio</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell>{data.nombre}</Table.Cell>
              <Table.Cell>{data.precio}</Table.Cell>
              
              <Table.Cell>
                <Link to="/updateBurguers">
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