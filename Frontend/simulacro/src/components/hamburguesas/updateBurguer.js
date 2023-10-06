import React, { useEffect, useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../form.css'

export default function UpdateBurguers() {
    const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

    const [_id, setID] = useState('ID');
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    useEffect(() => {
        setID(localStorage.getItem("ID"));
        setNombre(localStorage.getItem('Nombre'));
        setPrecio(localStorage.getItem('Precio'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:2031/burguers/putHam/${_id}`, {
            nombre,
            precio,
        }).then(() => {
            navigate('/readBurguers'); // Usamos navigate para redirigir
        });
    }

    return (
        <div className='formulario'>
            <h2>Editar - Hamburguesas</h2>
            <Form className='create-form' onSubmit={updateAPIData}>
                <Form.Field>
                    <label>Nombre</label>
                    <input placeholder='Nombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>Precio</label>
                    <input placeholder='Precio' value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </Form.Field>

                <Button type='submit'>Actualizar</Button>
            </Form>
        </div>
    );
}
