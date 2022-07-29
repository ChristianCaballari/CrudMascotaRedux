import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { editarMascotaAction } from "../actions/mascotasAction";

import { useNavigate } from "react-router-dom";

//useDispatch para ejecutar acciones, y useSelector para acceder al estate.

const EditarMascota = () => {

  const redireccionar = useNavigate();

  const dispatch = useDispatch();
 
  //Nuevo state de mascotas

  const [mascota, guardarMascota] = useState({
    nombre: "",
    descripcion: "",
    foto: "",
  });
  //Mascota a editar

  const mascotaeditar = useSelector((state) => state.mascotas.mascotaeditar);

  // llenar el state
  useEffect(() => {
    guardarMascota(mascotaeditar);
  }, [mascotaeditar]);

  //Leer datos del formulario
  const onchangeFormulario = e =>{
    guardarMascota({
      ...mascota,
      [e.target.name] : e.target.value
    });
  }

  const { nombre, descripcion, foto } = mascota; //destroc

  const submitEditarMascota = (e) => {
    e.preventDefault();
    dispatch(editarMascotaAction(mascota));
    redireccionar('/');
  };



  return (
    <div className="mb">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title mb-4 justify-content-center">
              Editar Mascota
            </h2>
            <form onSubmit={submitEditarMascota}>
              <div className="form-group">
                <label>Nombre Mascota</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="nombre"
                  value={nombre}
                  onChange={onchangeFormulario}
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
                  onChange={onchangeFormulario}
                />
              </div>

              <div className="form-group">
                <label>Descripcion</label>
                <textarea
                  className="form-control"
                  placeholder="Ingresa la descripción de tu mascota"
                  name="descripcion"
                  value={descripcion}
                  onChange={onchangeFormulario}
                />
              </div>
              <div className="mt">
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bol text-uppercase"
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditarMascota;
