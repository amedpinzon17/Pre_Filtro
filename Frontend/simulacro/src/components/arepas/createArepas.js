import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import '../form.css'

function CreateArepas() {
    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    const postData = (e) => {
        e.preventDefault(); 
        const arepa = {
            nombre: nombre,
            precio : precio
        }
        console.log(arepa);
        axios.post('http://localhost:2031/arepas/postArep', arepa).then(() => {
            navigate('/');
        });
    };

    return (
        <div className='formulario'>
            <h2>Crear - Arepas</h2>
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

export default CreateArepas;
