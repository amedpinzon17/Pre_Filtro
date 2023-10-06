import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import '../form.css'

export default function UpdateRestaurantes() {
    const navigate = useNavigate();

    const [_id, setID] = useState('');
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [horario, setHorario] = useState('');
    const [rating, setRating] = useState('');

    useEffect(() => {
        const storedID = localStorage.getItem('ID');
        const storedNombre = localStorage.getItem('nombre');
        const storedTipo = localStorage.getItem('tipo');
        const storedDireccion = localStorage.getItem('direccion');
        const storedTelefono = localStorage.getItem('telefono');
        const storedHorario = localStorage.getItem('horario');
        const storedRating = localStorage.getItem('rating');

        if (storedID) setID(storedID);
        if (storedNombre) setNombre(storedNombre);
        if (storedTipo) setTipo(storedTipo);
        if (storedDireccion) setDireccion(storedDireccion);
        if (storedTelefono) setTelefono(storedTelefono);
        if (storedHorario) setHorario(storedHorario);
        if (storedRating) setRating(storedRating);
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
            navigate('/readRestaurantes'); 
        });
    };

    return (
        <div className='formulario' >
            <h2>Editar - Restaurante</h2>
            <Form className='create-form'>
                <Form.Field>
                    <label>Nombre</label>
                    <input placeholder='nombre' type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>tipo</label>
                    <input placeholder='tipo' type='text' value={tipo} onChange={(e) => setTipo(e.target.value)} />
                </Form.Field>


                <Form.Field>
                    <label>direccion</label>
                    <input placeholder='direccion' type='text' value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </Form.Field>


                <Form.Field>
                    <label>Telefono</label>
                    <input placeholder='telefono' type='text' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </Form.Field>


                <Form.Field>
                    <label>horario</label>
                    <input placeholder='horario' type='text' value={horario} onChange={(e) => setHorario(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>rating</label>
                    <input placeholder='rating' type='text' value={rating} onChange={(e) => setRating(e.target.value)} />
                </Form.Field>

                
                
                <Button type='submit' onClick={updateAPIDataRes}>
                    Actualizar
                </Button>
            </Form>
        </div>
    );
}
