import React, { useEffect, useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Update() {
    const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

    const [_id, setID] = useState(null);
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [comida, setComida] = useState('');
    const [bebida, setBebida] = useState('');

    useEffect(() => {
        setID(localStorage.getItem("ID"));
        setDescripcion(localStorage.getItem('Descripcion'));
        setPrecio(localStorage.getItem('Precio'));
        setComida(localStorage.getItem('Comida'));
        setBebida(localStorage.getItem('Bebida'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:2031/combos/putCombo/${_id}`, {
            descripcion,
            precio,
            comida,
            bebida
        }).then(() => {
            navigate('/read'); // Usamos navigate para redirigir
        });
    }

    return (
        <div>
            <Form className='create-form' onSubmit={updateAPIData}>
                <Form.Field>
                    <label>Descripcion</label>
                    <input placeholder='Descripcion' type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>Precio</label>
                    <input placeholder='Precio' value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>Comida</label>
                    <input placeholder='Comida' value={comida} onChange={(e) => setComida(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>Bebida</label>
                    <input placeholder='Bebida' value={bebida} onChange={(e) => setBebida(e.target.value)} />
                </Form.Field>

                <Button type='submit'>Actualizar</Button>
            </Form>
        </div>
    );
}
