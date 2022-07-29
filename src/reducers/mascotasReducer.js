// Cada reducer tiene su propio state

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
  MASCOTA_EDITADO_EXITO,
  MASCOTA_EDITADO_ERROR,
} from "../types";

const initialState = {
  mascotas: [],
  error: null,
  loading: false,
  mascotaeliminar: null,
  mascotaeditar: null,
};

export default function mr(state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_MASCOTAS:
    case AGREGAR_MASCOTA:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_MASCOTA_EXITO:
      return {
        ...state,
        loading: false,
        mascotas: [...state.mascotas, action.payload],
      };
    case AGREGAR_MASCOTA_ERROR:
    case DESCARGA_MASCOTA_ERROR:
    case MASCOTA_ELIMINADA_ERROR:
    case MASCOTA_EDITADO_ERROR:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    // case COMENZAR_DESCARGA_MASCOTAS:
    //      return {
    //          ...state,
    //          loading:action.payload
    //      }
    //
    case DESCARGA_MASCOTAS_EXITOS:
      return {
        ...state,
        loading: false,
        error: null,
        mascotas: action.payload,
      };
    case OBTENER_MASCOTA_ELIMINAR:
      return {
        ...state,
        mascotaeliminar: action.payload,
      };
    case MASCOTA_ELIMANADA_EXITO:
      return {
        ...state,
        mascotas: state.mascotas.filter(
          (mascota) => mascota.id !== state.mascotaeliminar
        ),
        mascotaeliminar: null,
      };
    case OBTENER_MASCOTA_EDITAR:
      return {
        ...state,
        mascotaeditar: action.payload,
      };
    case MASCOTA_EDITADO_EXITO:
      return {
        ...state,
        mascotaeditar: null,
        mascotas: state.mascotas.map((mascota) =>
          mascota.id === action.payload.id
            ? (mascota = action.payload)
            : mascota
        ),
      };
    default:
      return state;
  }
}
