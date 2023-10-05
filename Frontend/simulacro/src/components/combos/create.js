import axios from 'axios';
import React, { useState } from 'react';
import { useHistory} from 'react-router';
import { Button, Form } from 'semantic-ui-react';

 function Create(){
    const history = useHistory();

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
            history.push('/');
        });
    };

    return (
        <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>Descripcion</label>
                    <input placeholder='nombre' type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Precio</label>
                    <input placeholder='apellido' value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Comida</label>
                    <input placeholder='apellido' value={comida} onChange={(e) => setComida(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Bebida</label>
                    <input placeholder='apellido' value={bebida} onChange={(e) => setBebida(e.target.value)} />
                </Form.Field>
                <Button type='submit' onClick={postData}>Crear</Button>
            </Form>
        </div>
    );

}


export default Create;