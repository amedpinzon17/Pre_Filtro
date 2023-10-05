import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UpdatePicadas() {
    const navigate = useNavigate();
    const [_id, setID] = useState(null);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    useEffect(() => {
        const id = localStorage.getItem('ID');
        const storedNombre = localStorage.getItem('Nombre');
        const storedPrecio = localStorage.getItem('Precio');
        
        // Establece valores predeterminados si los datos no están en localStorage
        setID(id || '');
        setNombre(storedNombre || '');
        setPrecio(storedPrecio || '');
    }, []);

    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:2031/picadas/putPicadas/${_id}`, {
            nombre,
            precio,
        }).then(() => {
            navigate('/readPicadas');
        });
    };

    return (
        <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>Nombre</label>
                    <input placeholder='Nombre' type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Field>
                
                <Form.Field>
                    <label>Precio</label>
                    <input placeholder='Precio' value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </Form.Field>

                <Button type='submit' onClick={updateAPIData}>Actualizar</Button>
            </Form>
        </div>
    );
}
