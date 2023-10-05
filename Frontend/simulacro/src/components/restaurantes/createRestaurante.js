
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form } from 'semantic-ui-react';

export default function CreateRestaurante() {
    const history = useHistory();

    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [horario, setHorario] = useState('');
    const [rating, setRating] = useState('');

    const postDataRes = () => {
        axios.post('http://localhost:2031/restaurantes/postRestauran', {
            nombre,
            tipo,
            direccion,
            telefono,
            horario,
            rating,
        }).then(() => {
            history.push('/');
        });
    };

    return (
        <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>Nombre</label>
                    <input placeholder='Ingrese el nombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>Tipo</label>
                    <input placeholder='Ingrese el tipo' value={tipo} onChange={(e) => setTipo(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>Direccion</label>
                    <input placeholder='Ingrese la dirección' value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>Telefono</label>
                    <input placeholder='Ingrese el teléfono' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>Horario</label>
                    <input placeholder='Ingrese el horario' value={horario} onChange={(e) => setHorario(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>Rating</label>
                    <input placeholder='Ingrese el rating' value={rating} onChange={(e) => setRating(e.target.value)} />
                </Form.Field>

                <Button type='submit' onClick={postDataRes}>Crear</Button>
            </Form>
        </div>
    );
}
