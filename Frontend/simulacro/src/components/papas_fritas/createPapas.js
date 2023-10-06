import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import '../form.css'


function CreatePapas() {
    const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    const postData = () => {
        axios.post('http://localhost:2031/papas/postfritas', {
            nombre, 
            precio,
        }).then(() => {
            navigate('/'); // Usamos navigate para redirigir
        });
    };

    return (
        <div className='formulario'>
            <h2>Crear - Papas Fritas</h2>
                <Form className='create-form' onSubmit={postData}>
                    <Form.Field>
                        <label>Nombre</label>
                        <input placeholder='Nombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </Form.Field>

                    <Form.Field>
                        <label>Precio</label>
                        <input placeholder='Precio' value={precio} onChange={(e) => setPrecio(e.target.value)} />
                    </Form.Field>

                    <Button type='submit'>Crear</Button>
            </Form>
        </div>
    );
}

export default CreatePapas;
