import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

//redux
import { useDispatch } from "react-redux";
import {
  borrarMascotaAction,
  obtenerMascotaEditar,
} from "../actions/mascotasAction";

const Producto = ({ mascota }) => {
  const { nombre, descripcion, foto, id } = mascota;

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Habilitar navigate para redireccionar

  //Cuando se seleccione eliminar, preguntar si desea eliminar la mascota.

  const confirmarEliminarMascota = (id) => {
    // Preguntar si desea eliminar
    Swal.fire({
      title: "Estas Seguro?",
      text: "No se puede volver a recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Pasarlo al action
        dispatch(borrarMascotaAction(id));
      }
    });
  };

  // redirigir
  const redireccionarEdicion = (mascota) => {
    dispatch(obtenerMascotaEditar(mascota));
    navigate(`/mascota/editar/${mascota.id}`);
  };
  return (
    //     <tr>
    //          <td>{mascota.nombre}</td>
    //          <td>{mascota.descripcion}</td>
    //          <td><img src={mascota.foto} width="80px"></img></td>
    //     </tr>
    <article className="entrada">
      <img src={foto} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <div className="flex-btn-acciones">
          <button
            className="btn btn-edit"
            type="button"
            onClick={() => redireccionarEdicion(mascota)}
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-delete"
            onClick={() => confirmarEliminarMascota(id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
};

export default Producto;
