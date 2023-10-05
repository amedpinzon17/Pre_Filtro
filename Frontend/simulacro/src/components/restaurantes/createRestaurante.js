import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa desde 'react-router-dom'
import { Button, Form } from 'semantic-ui-react';

export default function CreateRestaurantes() {
    const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory

    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [horario, setHorario] = useState('');
    const [rating, setRating] = useState('');

    const postDataRes = (e) => {
        e.preventDefault();
        axios.post('http://localhost:2031/restaurantes/postRestauran', {
            nombre,
            tipo,
            direccion,
            telefono,
            horario,
            rating,
        }).then(() => {
            navigate('/readRestaurantes'); 
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
                    <label>tipo</label>
                    <input placeholder='Ingrese el nombre' type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
                </Form.Field>
                


                <Form.Field>
                    <label>Direccion</label>
                    <input placeholder='Ingrese el nombre' type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </Form.Field>


                <Form.Field>
                    <label>telefono</label>
                    <input placeholder='Ingrese el nombre' type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </Form.Field>


                <Form.Field>
                    <label>horario</label>
                    <input placeholder='Ingrese el nombre' type="text" value={horario} onChange={(e) => setHorario(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>rating</label>
                    <input placeholder='Ingrese el nombre' type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
                </Form.Field>


                <Button type='button' onClick={postDataRes}>Crear</Button>
            </Form>
        </div>
    );
}
