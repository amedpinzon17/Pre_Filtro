import React, { useEffect, useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UpdatePapas() {
    const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

    const [_id, setID] = useState(null);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    useEffect(() => {
        setID(localStorage.getItem("ID"));
        setNombre(localStorage.getItem('Nombre'));
        setPrecio(localStorage.getItem('Precio'));
    }, []);

    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:2031/papas/putfritas/${_id}`, {
            nombre,
            precio,
        }).then(() => {
            navigate('/readPapas'); // Usamos navigate para redirigir
        });
    }

    return (
        <div>
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
    )
}
