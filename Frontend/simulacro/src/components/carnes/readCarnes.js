import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../table.css'


export default function ReadCarnes() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2031/carnes/getCarne').then((response) => {
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
    axios.delete(`http://localhost:2031/carnes/deleteCarne/${_id}`)
    .then((response) => {
      console.log('elemento eliminado;', response.data);
      window.location.reload();
    })
    .catch((error) => {
        console.error('Error al eliminar el elemento:', error);
      });
  };

  return (
    <div className='customers1'>
       <h2>Carnes</h2>
      <Table singleLine>
        <Table.Header>
          <Table.Row className='titulos'>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Precio</Table.HeaderCell>
            <Table.HeaderCell>Buttons</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data._id}>
              <Table.Cell>{data.nombre}</Table.Cell>
              <Table.Cell>{data.precio}</Table.Cell>
              
              <Table.Cell>
                <Link to="/updateCarnes">
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