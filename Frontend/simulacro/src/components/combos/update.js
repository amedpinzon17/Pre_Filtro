import React, {useEffect, useState} from "react";
import { Button, Form} from 'semantic-ui-react';
import axios from "axios";
import { useHistory } from "react-router";


export default function Update(){
    const history = useHistory();

    const [_id ,setID] = useState(null);
    const [descripcion, setDescripcion] = useState('');
    const [precio ,setPrecio] = useState('');
    const [comida, setComida] = useState('');
    const [bebida ,setBebida] = useState('');

    useEffect(() => {
        setID(localStorage.getItem("ID"));
        setDescripcion(localStorage.getItem('Descripcion'));
        setPrecio(localStorage.getItem('Precio'));
        setComida(localStorage.getItem('Comida'));
        setBebida(localStorage.getItem('Bebida')) ;
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:2031/combos/putCombo/${_id}`, {
            descripcion,
            precio,
            comida,
            bebida
        }).then(() => {
            history.push('/read');
        });

    }

    return(
         <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>Descripcion</label>
                    <input placeholder='descripcion' type= "text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}  />
                </Form.Field>
                
                <Form.Field>
                    <label>Precio</label>
                    <input placeholder='precio' value={precio} onChange={(e) => setPrecio (e.target.value)} ></input>
                </Form.Field>

                <Form.Field>
                    <label>Comida</label>
                    <input placeholder='comida' value={comida} onChange={(e) => setComida (e.target.value)} ></input>
                </Form.Field>

                <Form.Field>
                    <label>Bebida</label>
                    <input placeholder='bebida' value={bebida} onChange={(e) => setBebida (e.target.value)} ></input>
                </Form.Field>
                
                <Button type='submit' onClick={updateAPIData}>Actualizar</Button>
            </Form>
        </div>

    )
            


}