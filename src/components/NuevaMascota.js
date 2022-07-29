import React, { useState } from "react";
//useDispatch, nos sirve para mandar a ejecutar las acciones
// useSelector, es una forma de acceder al state dentro del componente
import { useDispatch, useSelector } from "react-redux";

// Actions de redux
import  { crearNuevaMascotaAction } from '../actions/mascotasAction'

const NuevaMascota = ({history}) => {

  //state del componente.
  
  const [nombre, guardarNombre] = useState('');
  const [descripcion, guardarDescripcion] = useState('');
  const [foto, guardarFoto] = useState('');

  // Utilizar useDispatch y te crea una funcion
   const dispatch = useDispatch();

   //Acceder al state del store.
    const cargando = useSelector((state)=> state.mascotas.loading);
    const error = useSelector((state)=>state.mascotas.error)
    console.log(cargando);
    console.log(error);
  
   // el dispatch, es una funcion que manda a llamar otra funcion
  //mandar a llamar las funciones que tengas en tus actions
  // (mandar a llamar el action de mascotaAction)
  const agregarMascota = (mascota) => dispatch(crearNuevaMascotaAction(mascota))

 // Cuando se de submit

const submitNuevaMascota = e => {
    e.preventDefault();
    
    //Validar formulario
    if(nombre.trim() === '' || descripcion.trim() === '' || foto.trim() === ''){
      return;
    }

    // Ver si no hay errores

    //Crear la nueva mascota
    //Lo pasamos como objeto
    agregarMascota({
      nombre,
      descripcion,
      foto
    });
  
    // redireccionar
    history.push('/');
}

  return (
    <div className="mb">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title mb-4 justify-content-center">
              Agregar Nueva Mascota
            </h2>
            <form 
            onSubmit = {submitNuevaMascota}
            >
              <div className="form-group">
                <label>Nombre Mascota</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="nombre"
                  value={nombre}
                  onChange = {e => guardarNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Foto Mascota</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Foto Mascota"
                  name="foto"
                  value={foto}
                  onChange = {e => guardarFoto(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Descripcion</label>
                <textarea
                  className="form-control"
                  placeholder="Ingresa la descripción de tu mascota"
                  name="descripcion"
                  value={descripcion}
                  onChange = {e => guardarDescripcion(e.target.value)}
                />
              </div>
              <div className="mt">
                <button type="submit" className="btn btn-primary font-weight-bol text-uppercase">
                  Agregar
                </button>
              </div>
            </form>
            {/* {cargando ? <p>Cargando...</p>: null} */}
            { error ? <p className="alert alert-danger">Hubo un error</p>: null  }
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NuevaMascota;
