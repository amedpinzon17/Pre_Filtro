import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import '../form.css'


function Create() {
    const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [comida, setComida] = useState('');
    const [bebida, setBebida] = useState('');

    const postData = () => {
        axios.post('http://localhost:2031/combos/postCombo', {
            descripcion, 
            precio, 
            comida, 
            bebida
        }).then(() => {
            navigate('/'); // Usamos navigate para redirigir
        });
    };

    return (
        <div className='formulario'>
            <h2>Crear - Combo</h2>
            <Form className='create-form' onSubmit={postData}>
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
                <Button type='submit'>Crear</Button>
            </Form>
        </div>
    );
}

export default Create;
