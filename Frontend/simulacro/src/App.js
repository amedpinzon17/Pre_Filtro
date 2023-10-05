

import './App.css';
import Read from './components/combos/read.js';
import Create from './components/combos/create.js';
import Update from './components/combos/update.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import ReadRestaurantes from './components/restaurantes/readRestaurante.js';
import UpdateRestaurantes from './components/restaurantes/updateRestaurante.js';
import CreateRestaurante from './components/restaurantes/createRestaurante.js';

/* ----------------------------------------------------- */

import ReadArepas from './components/arepas/readArepas.js';
import CreateArepas from './components/arepas/createArepas.js'
import UpdateArepas from './components/arepas/updateArepas';

/* ---------------------------------------------------------- */

import ReadBebidas from './components/bebidas/readBebidas';
import UpdateBebidas from './components/bebidas/updateBebidas';
import CreateBebidas from './components/bebidas/createBebidas';


/* ---------------------------------------------------------- */

import ReadCarnes from './components/carnes/readCarnes';
import UpdateCarnes from './components/carnes/updateCarnes';
import CreateCarnes from './components/carnes/createCarnes';

/* ---------------------------------------------------------- */

import ReadBurguers from './components/hamburguesas/readBurguer';
import UpdateBurguers from './components/hamburguesas/updateBurguer';
import CreateBurguers from './components/hamburguesas/createBurguer';


/* ---------------------------------------------------------- */


import ReadPicadas from './components/picadas/readPicadas'
import UpdatePicadas from './components/picadas/updatePicadas' 
import CreatePicadas from './components/picadas/createPicadas' 


/* ---------------------------------------------------------- */


import ReadPapas from './components/papas_fritas/readPapas'
import UpdatePapas from './components/papas_fritas/updatePapas' 
import CreatePapas from './components/papas_fritas/createPapas' 


/* ---------------------------------------------------------- */

function App() {
  return (
    <Router>
      <div className='main'>
        <h2 className='main-header'> Combos </h2>
        <Link to='/create'>
          <button>Crear usuario</button>
        </Link>

        <div>
          <Route path="/create" component={Create}></Route>
        </div>

        <div>
          <Route path="/read" component={Read}></Route>
        </div>

        <div>
          <Route path="/update" component={Update}></Route>
        </div>


{/* ---------------------------------------------------------- */}


        <h2 className='main-header2'> Restaurantes </h2>
        <Link to='/createRestaurantes'>
          <button>Crear Restaurantes</button>
        </Link>
        <div>
          <Route path="/createRestaurantes" component={CreateRestaurante}></Route>
        </div>

        <div>
          <Route path="/readRestaurantes" component={ReadRestaurantes}></Route>
        </div>

        <div>
          <Route exact path="/updateRestaurantes" component={UpdateRestaurantes}></Route>

        </div>
      

{/* ---------------------------------------------------------- */}

        <h2 className='main-header2'> Arepas </h2>
        <Link to='/createArepas'>
          <button>Crear Arepas</button>
        </Link>
        <div>
          <Route path="/createArepas" component={CreateArepas}></Route>
        </div>

        <div>
          <Route path="/readArepas" component={ReadArepas}></Route>
        </div>

         <div>
          <Route exact path="/updateArepas" component={UpdateArepas}></Route>

        </div>




{/* ---------------------------------------------------------- */}

        <h2 className='main-header2'> Bebidas </h2>
        <Link to='/createBebidas'>
          <button>Crear Bebidas</button>
        </Link>
        <div>
          <Route path="/createBebidas" component={CreateBebidas}></Route>
        </div>

        <div>
          <Route path="/readBebidas" component={ReadBebidas}></Route>
        </div>

         <div>
          <Route exact path="/updateBebidas" component={UpdateBebidas}></Route>

        </div>




  {/* ---------------------------------------------------------- */}

        <h2 className='main-header2'> Carnes </h2>
        <Link to='/createCarnes'>
          <button>Create Carnes</button>
        </Link>
        <div>
          <Route path="/createCarnes" component={CreateCarnes}></Route>
        </div>

        <div>
          <Route path="/readCarnes" component={ReadCarnes}></Route>
        </div>

         <div>
          <Route exact path="/updateCarnes" component={UpdateCarnes}></Route>

        </div>



        {/* ---------------------------------------------------------- */}

        <h2 className='main-header2'> Hamburguesas </h2>
        <Link to='/createBurguers'>
          <button>Create Hamburguesas</button>
        </Link>
        <div>
          <Route path="/createBurguers" component={CreateBurguers}></Route>
        </div>

        <div>
          <Route path="/readBurguers" component={ReadBurguers}></Route>
        </div>

         <div>
          <Route exact path="/updateBurguers" component={UpdateBurguers}></Route>

        </div>



        {/* ---------------------------------------------------------- */}

        <h2 className='main-header2'> Picadas </h2>
        <Link to='/createPicadas'>
          <button>Create Picadas</button>
        </Link>
        <div>
          <Route path="/createPicadas" component={CreatePicadas}></Route>
        </div>

        <div>
          <Route path="/readPicadas" component={ReadPicadas}></Route>
        </div>

         <div>
          <Route exact path="/updatePicadas" component={UpdatePicadas}></Route>

        </div>






        {/* ---------------------------------------------------------- */}

        <h2 className='main-header2'> Papas Fritas </h2>
        <Link to='/createPapas'>
          <button>Create papas Fritas</button>
        </Link>
        <div>
          <Route path="/createPapas" component={CreatePapas}></Route>
        </div>

        <div>
          <Route path="/readPapas" component={ReadPapas}></Route>
        </div>

         <div>
          <Route exact path="/updatePapas" component={UpdatePapas}></Route>

        </div>








      </div>
    </Router>






  );
}

export default App;
