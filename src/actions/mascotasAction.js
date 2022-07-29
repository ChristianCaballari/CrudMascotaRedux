//Estas son las acciones que modifican el state.

import {
  AGREGAR_MASCOTA,
  AGREGAR_MASCOTA_EXITO,
  AGREGAR_MASCOTA_ERROR,
  COMENZAR_DESCARGA_MASCOTAS,
  DESCARGA_MASCOTAS_EXITOS,
  DESCARGA_MASCOTA_ERROR,
  OBTENER_MASCOTA_ELIMINAR,
  MASCOTA_ELIMANADA_EXITO,
  MASCOTA_ELIMINADA_ERROR,
  OBTENER_MASCOTA_EDITAR,
  COMENZAR_EDICION_MASCOTA,
  MASCOTA_EDITADO_EXITO,
  MASCOTA_EDITADO_ERROR,
} from "../types";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

//Esta funcion es la que se va utilizar en la vista.

//Crear nueva mascota
//Se hacen consultas a la base de datos y se manda a ejecutar el reducer para modificar el state.

export function auth(mascota) {

}
export function crearNuevaMascotaAction(mascota) {
  return async (dispatch) => {
    dispatch(agregarMascota());
    try {
      // insertar en la API
      await clienteAxios.post("/mascotas", mascota);
      // Si se inserta correctamente, actualiza el state.
      dispatch(agregarMascotaExito(mascota));
      // Alerta
      Swal.fire("correcto", "Mascota agregada correctamente", "success");
    } catch (error) {
      console.log(error);
      // Si hay error, cambiar el state.
      dispatch(agregarMascotaError(true));

      //alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, vuelve a intentarlo",
      });
    }
  };
}

const agregarMascota = () => ({
  type: AGREGAR_MASCOTA,
  //payload, seria lo que va modificar los datos, osea lo que va modificar el state.
  payload: true,
});

//Si la mascota se guarda en la DB
const agregarMascotaExito = (mascota) => ({
  type: AGREGAR_MASCOTA_EXITO,
  payload: mascota,
});
//Si hubo un error
const agregarMascotaError = (estado) => ({
  type: AGREGAR_MASCOTA_ERROR,
  payload: estado,
});

/////////////////////////////////////////////////////////////////
//Funcion que descarga las mascotas de las DB
export function obtenerMascotasAction() {
  return async (dispatch) => {
    dispatch(descargarMascotas());

    try {
      const respuesta = await clienteAxios.get("/mascotas");
      dispatch(descargaMascotasExito(respuesta.data));
      console.log(respuesta.data);
    } catch (error) {
      dispatch(descargaMascotasError());
    }
  };
}
const descargarMascotas = () => ({
  type: COMENZAR_DESCARGA_MASCOTAS,
  payload: true,
});
const descargaMascotasExito = (mascotas) => ({
  type: DESCARGA_MASCOTAS_EXITOS,
  payload: mascotas,
});
const descargaMascotasError = () => ({
  type: DESCARGA_MASCOTA_ERROR,
  payload: true,
});

// Seleccionar y eliminar mascota.
export function borrarMascotaAction(id) {
  return async (dispatch) => {
    dispatch(obtenerMascotaEliminar(id));

    try {
      await clienteAxios.delete(`/mascotas/${id}`);
      dispatch(eliminarMascotaExito());

      //Mostrar alerta
      Swal.fire("Eliminado!", "Mascota eliminada correctamente.", "success");
    } catch (error) {
      console.log(error);
      dispatch(eliminarMascotaError());
    }
  };
}
const obtenerMascotaEliminar = (id) => ({
  type: OBTENER_MASCOTA_ELIMINAR,
  payload: id,
});

const eliminarMascotaExito = () => ({
  type: MASCOTA_ELIMANADA_EXITO,
});
const eliminarMascotaError = () => ({
  type: MASCOTA_ELIMINADA_ERROR,
  payload: true,
});

// Colocar mascota en edicion

export function obtenerMascotaEditar(mascota) {
  return (dispatch) => {
    dispatch(obtenerMascotaAction(mascota));
  };
}
const obtenerMascotaAction = (mascota) => ({
  type: OBTENER_MASCOTA_EDITAR,
  payload: mascota,
});

// Editar un registro en la API JSON
export function editarMascotaAction(mascota) {
  return async (dispatch) => {
    dispatch(editarMascota(mascota));

    try {
      await clienteAxios.put(`/mascotas/${mascota.id}`, mascota);
      dispatch(editarMascotaExito(mascota));
    } catch (error) {
      console.log(error);
      dispatch(editarMascotaError());
    }
  };
}

const editarMascota = () => ({
  type: COMENZAR_EDICION_MASCOTA,
});
const editarMascotaExito = (mascota) => ({
  type: MASCOTA_EDITADO_EXITO,
  payload: mascota,
});

const editarMascotaError = () => ({
  type: MASCOTA_EDITADO_ERROR,
});
