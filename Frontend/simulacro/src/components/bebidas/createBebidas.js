import axios from 'axios';
import React, { useState } from 'react';
import { useHistory} from 'react-router';
import { Button, Form } from 'semantic-ui-react';

 function CreateBebidas(){
    const history = useHistory();

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    
  

    const postData = () => {
        axios.post('http://localhost:2031/Bebidas/postBebi', {
            nombre, 
            precio,
        }).then(() => {
            history.push('/');
        }).catch(error => {
        console.error("Error al enviar la solicitud:", error);
    });
    };

    return (
        <div>
            <Form className='create-form'>

                <Form.Field>
                    <label>nombre</label>
                    <input placeholder='nombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Field>

                <Form.Field>
                    <label>Precio</label>
                    <input placeholder='precio' value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </Form.Field>
               
                <Button type='submit' onClick={postData}>Crear</Button>
            </Form>
        </div>
    );

}


export default CreateBebidas;