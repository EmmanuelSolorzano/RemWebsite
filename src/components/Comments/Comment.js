import React from "react";

export default function Comment(props) {
  const { nombre, fecha_creacion, descripcion } = props.comment;

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://ui-avatars.com/api/?name=${nombre}&background=C18d43&size=128`}
        alt={nombre}
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{fecha_creacion}</small>
        <h6 className="mt-0 mb-1 text-muted">{nombre}</h6>
        {descripcion}
      </div>
    </div>
  );
}
