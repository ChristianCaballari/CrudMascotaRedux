import React from "react";
import Header from "./components/Header";
import Mascotas from "./components/Mascotas";
import NuevaMascota from "./components/NuevaMascota";
import EditarMascota from "./components/EditarMascota";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Redux

import { Provider } from 'react-redux';//De donde flujen los datos
import store from './store';//

function App() {
  return (
    <BrowserRouter>
    {/*De esta forma todos los datos, todo lo que registremos
    en nuestro reducers,todas las funciones que se agreguen
    van a estar disponibles en todo el proyecto*/}
    <Provider store = {store}>
      <Header />
      <div className="container">
        <Routes>
          <Route  path="/" element={<Mascotas/>} />
          <Route path="/mascota/nuevo" element={<NuevaMascota/>}/>
          <Route path="mascota/editar/:id" element={<EditarMascota/>}/>
        </Routes>
      </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
