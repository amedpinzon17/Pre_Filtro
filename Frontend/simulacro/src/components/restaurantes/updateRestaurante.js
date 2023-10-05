import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form } from 'semantic-ui-react';

export default function UpdateRestaurantes() {
    const history = useHistory();

    const [_id, setID] = useState(null);
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [horario, setHorario] = useState('');
    const [rating, setRating] = useState('');

    useEffect(() => {


         console.log('Horario:', localStorage.getItem('Horario'));

        setID(localStorage.getItem('_id'));
        setNombre(localStorage.getItem('nombre'));
        setTipo(localStorage.getItem('tipo'));
        setDireccion(localStorage.getItem('direccion'));
        setTelefono(localStorage.getItem('telefono'));
        setHorario(localStorage.getItem('horario'));
        setRating(localStorage.getItem('rating'));
    }, []);

    const updateAPIDataRes = () => {
        axios.put(`http://localhost:2031/restaurantes/putRestauran/${_id}`, {
            nombre,
            tipo,
            direccion,
            telefono,
            horario,
            rating,
        })
        .then(() => {
            history.push('/readRestaurantes');
        })
    };

    return (
        <div>
        <Form className='create-form'>
            <Form.Field>
            <label>Nombre</label>
            <input placeholder='nombre' type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Field>

            <Form.Field>
            <label>Tipo</label>
            <input placeholder='tipo' value={tipo} onChange={(e) => setTipo(e.target.value)}/>
            </Form.Field>

            <Form.Field>
            <label>Direccion</label>
            <input placeholder='direccion' value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
            
            </Form.Field>

            <Form.Field>
            <label>Telefono</label>
            <input placeholder='telefono' value={telefono} onChange={(e) => setTelefono(e.target.value)}/>     
            </Form.Field>

            <Form.Field>
            <label>Horario</label>
            <input placeholder='Horario' value={horario} onChange={(e) => setHorario(e.target.value)}/>     
            </Form.Field>

            <Form.Field>
            <label>Rating</label>
            <input placeholder='rating' value={rating} onChange={(e) => setRating(e.target.value)} />

            </Form.Field>

            <Button type='submit' onClick={updateAPIDataRes}>
            Actualizar
            </Button>
        </Form>
        </div>
    );
}
