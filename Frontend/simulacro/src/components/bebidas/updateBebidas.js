import React, { useEffect, useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../form.css'

export default function UpdateBebidas() {
    const navigate = useNavigate();

    const [_id, setID] = useState(null);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    useEffect(() => {
        setID(localStorage.getItem("ID"));
        setNombre(localStorage.getItem('Nombre'));
        setPrecio(localStorage.getItem('Precio'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:2031/Bebidas/putBebi/${_id}`, {
            nombre,
            precio,
        }).then(() => {
            navigate('/readBebidas');
        });
    }

    return (
        <div className="formulario">
            <h2>Eitar - Bebidas</h2>
            <Form className='create-form'>
                <Form.Field>
                    <label>Nombre</label>
                    <input placeholder='Nombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Field>
                
                <Form.Field>
                    <label>Precio</label>
                    <input placeholder='Precio' value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </Form.Field>

                <Button type='submit' onClick={updateAPIData}>Actualizar</Button>
            </Form>
        </div>
    )
}
