import './App.css';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Read from './components/combos/read.js';
import Create from './components/combos/create.js';
import Update from './components/combos/update.js';
import ReadRestaurantes from './components/restaurantes/readRestaurante.js';
import UpdateRestaurantes from './components/restaurantes/updateRestaurante.js';
import CreateRestaurantes from './components/restaurantes/createRestaurante.js';
import ReadArepas from './components/arepas/readArepas.js';
import CreateArepas from './components/arepas/createArepas.js';
import UpdateArepas from './components/arepas/updateArepas';
import ReadBebidas from './components/bebidas/readBebidas';
import UpdateBebidas from './components/bebidas/updateBebidas';
import CreateBebidas from './components/bebidas/createBebidas';
import ReadCarnes from './components/carnes/readCarnes';
import UpdateCarnes from './components/carnes/updateCarnes';
import CreateCarnes from './components/carnes/createCarnes';
import ReadBurguers from './components/hamburguesas/readBurguer';
import UpdateBurguers from './components/hamburguesas/updateBurguer';
import CreateBurguers from './components/hamburguesas/createBurguer';

import ReadPicadas from './components/picadas/readPicadas';
import UpdatePicadas from './components/picadas/updatePicadas';
import CreatePicadas from './components/picadas/createPicadas';
import ReadPapas from './components/papas_fritas/readPapas';
import UpdatePapas from './components/papas_fritas/updatePapas';
import CreatePapas from './components/papas_fritas/createPapas';

function App() {
  return (
    <div className='principal'>
      <div className='main'>
        <h1 className='main-header'> PRE - FILTRO </h1>
        <Menu />
       <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />

          <Route path="/createRestaurantes" element={<CreateRestaurantes />} />
          <Route path="/readRestaurantes" element={<ReadRestaurantes />} />
          <Route path="/updateRestaurantes" element={<UpdateRestaurantes />} />

          <Route path="/createArepas" element={<CreateArepas />} />
          <Route path="/readArepas" element={<ReadArepas />} />
          <Route path="/updateArepas" element={<UpdateArepas />} />

          <Route path="/createBebidas" element={<CreateBebidas />} />
          <Route path="/readBebidas" element={<ReadBebidas />} />
          <Route path="/updateBebidas" element={<UpdateBebidas />} />

          <Route path="/createCarnes" element={<CreateCarnes />} />
          <Route path="/readCarnes" element={<ReadCarnes />} />
          <Route path="/updateCarnes" element={<UpdateCarnes />} />

          <Route path="/createBurguers" element={<CreateBurguers />} />
          <Route path="/readBurguers" element={<ReadBurguers />} />
          <Route path="/updateBurguers" element={<UpdateBurguers />} />

          <Route path="/createPicadas" element={<CreatePicadas />} />
          <Route path="/readPicadas" element={<ReadPicadas />} />
          <Route path="/updatePicadas" element={<UpdatePicadas />} />

          <Route path="/createPapas" element={<CreatePapas />} />
          <Route path="/readPapas" element={<ReadPapas />} />
          <Route path="/updatePapas" element={<UpdatePapas />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
