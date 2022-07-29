import React from 'react';
import { Fragment, useEffect } from 'react';
import Mascota from './Mascota';

// Redux

import {useSelector, useDispatch} from 'react-redux';
import { obtenerMascotasAction } from '../actions/mascotasAction';

const Mascotas = () => {

     const dispatch = useDispatch();

     useEffect(()=>{
          //Consultar la API
          const cargarMascotas = () => dispatch(obtenerMascotasAction());

          cargarMascotas();
     }, []);

     //Obtener el state

     const mascotas = useSelector(state => state.mascotas.mascotas);

     const error = useSelector(state => state.mascotas.error);

     const cargando = useSelector(state => state.mascotas.loading);



     return ( 
          <Fragment>
             <h2 className='text-center'>Listado de Mascotas</h2>

             { error ? <p className='alert alert-danger'>Hubo un error</p>: null}

             {cargando ? <p>Cargando...</p> :null}
             {/* <table className='table table-striped table-success'>
                  <thead className='bg-primary table-dark'>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Descripcion</th>
                    <th scope='col'>Foto</th>
                    <th scope='col'>Acciones</th>
                  </thead>
                  <tbody>
                     { mascotas.length === 0 ? 'No hay Mascotas': ( mascotas.map(mascota => (
                         <Mascota
                            key={mascota.id}
                            mascota={mascota}
                         />
                     ))
                         )}
                  </tbody>
             </table> */}

             <div className="contenedor">
                  <main className="contenido-principal">
                  { mascotas.length === 0 ? 'No hay Mascotas': ( mascotas.map(mascota => (
                         <Mascota
                            key={mascota.id}
                            mascota={mascota}
                         />
                     ))
                         )}   
                  </main>
             </div>
          </Fragment>
      );
}
 
export default Mascotas;