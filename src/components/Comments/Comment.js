import React from "react";

export default function Comment(props) {
  const { nombre, fecha_creacion, hora_creacion, descripcion } = props.comment;

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://api.adorable.io/avatars/256/${nombre.toLowerCase()}.png`}
        alt={nombre}
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{fecha_creacion} - {hora_creacion.substring(0,5)}</small>
        <h6 className="mt-0 mb-1 text-muted">{nombre}</h6>
        {descripcion}
      </div>
    </div>
  );
}