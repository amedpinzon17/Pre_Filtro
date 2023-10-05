import React, {useEffect, useState} from "react";
import { Button, Form} from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";


export default function UpdateCarnes(){
    const history = useHistory();

    const [_id ,setID] = useState(null);
    const [nombre, setNombre] = useState('');
    const [precio ,setPrecio] = useState('');
    

    useEffect(() => {
        setID(localStorage.getItem("ID"));
        setNombre(localStorage.getItem('Nombre'));
        setPrecio(localStorage.getItem('Precio'));
        
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:2031/carnes/putCarne/${_id}`, {
            nombre,
            precio,
        }).then(() => {
            history.push('/readCarnes');
        });

    }

    return(
         <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>nombre</label>
                    <input placeholder='nombre' type= "text" value={nombre} onChange={(e) => setNombre(e.target.value)}  />
                </Form.Field>
                
                <Form.Field>
                    <label>Precio</label>
                    <input placeholder='precio' value={precio} onChange={(e) => setPrecio (e.target.value)} ></input>
                </Form.Field>

                
                <Button type='submit' onClick={updateAPIData}>Actualizar</Button>
            </Form>
        </div>

    )
            


}