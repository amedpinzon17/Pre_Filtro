import { Link } from 'react-router-dom';
import React from 'react';
import './menu.css'

function Menu() {
    return (
        <div className='menu-container'>

            <div className='card'>
              
                <Link to='/read'>
                    <button className="button">Combos</button>
                </Link>
                <Link to='/create'>
                    <button className="button">create</button>
                </Link>
            </div>

            <div className='card'>
              <Link to='/readRestaurantes'>
                <button className="button">Restaurantes</button>
              </Link>
              <Link to='/createRestaurantes'>
                    <button className="button">create</button>
              </Link>
            </div>


            <div className='card'>
              <Link to='/readArepas'>
                <button className="button">Arepas</button>
            </Link>
            <Link to='/createArepas'>
                <button className="button">create</button>
            </Link>
            </div>



            <div className='card'>
              
              <Link to='/readBebidas'>
                <button className="button">Bebidas</button>
              </Link>
              <Link to='/createBebidas'>
                <button className="button">create</button>
              </Link>
            </div>


            <div className='card'>
              
            <Link to='/readCarnes'>
                <button className="button">Carnes</button>
            </Link>
            <Link to='/createCarnes'>
                <button className="button">create</button>
            </Link>
            </div>


            <div className='card'>
              
            <Link to='/readBurguers'>
                <button className="button">Hamburguesas</button>
            </Link>
            <Link to='/createBurguers'>
                <button className="button">Create</button>
            </Link>
            </div>


            <div className='card'>
              
            <Link to='/readPicadas'>
                <button className="button">Picadas</button>
            </Link>
            <Link to='/createPicadas'>
                <button className="button">Picadas</button>
            </Link>
            </div>


            <div className='card'>
              
            <Link to='/readPapas'>
                <button className="button">Papas Fritas</button>
            </Link>
            <Link to='/createPapas'>
                <button className="button">Create</button>
            </Link>
            </div>

        </div>
    )
}

export default Menu;
