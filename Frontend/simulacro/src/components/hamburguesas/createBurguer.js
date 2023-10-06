import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../form.css'


function CreateBurguers() { // Nombre en mayúscula según la convención de React
    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    const postData = (e) => {
        e.preventDefault();
        console.log(nombre, precio);
        const burgerData = {
            nombre: nombre,
            precio: precio,
        }
        axios.post(`http://localhost:2031/burguers/postHam`, burgerData).then(() => {
            navigate('/');
        });
        
    }

    return (
        <div className='formulario'>
            <h2>Crear - Hamburguesas</h2>
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

export default CreateBurguers; 
