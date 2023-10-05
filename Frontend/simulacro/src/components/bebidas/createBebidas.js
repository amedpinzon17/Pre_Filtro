import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

function CreateBebidas() {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    const postData = () => {
        axios.post('http://localhost:2031/Bebidas/postBebi', {
            nombre,
            precio,
        }).then(() => {
            navigate('/');
        }).catch(error => {
            console.error("Error al enviar la solicitud:", error);
        });
    };

    return (
        <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>Nombre</label>
                    <input placeholder='Nombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Precio</label>
                    <input placeholder='Precio' value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </Form.Field>
                <Button type='submit' onClick={postData}>Crear</Button>
            </Form>
        </div>
    );
}

export default CreateBebidas;
