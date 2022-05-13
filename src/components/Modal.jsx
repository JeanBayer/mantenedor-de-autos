import { useState, useEffect } from "react";

const Modal = ({ campos }) => {
  const [descripcion, setDescripcion] = useState("");
  const [detalle, setDetalle] = useState("");

  useEffect(() => {
    setDescripcion(campos.descripcion);
    setDetalle(campos.detalle);
  }, [campos]);

  return (
    <div>
      <section>
        <label>Descripcion:</label>
        <input
          type="text"
          value={descripcion}
          placeholder={campos.descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </section>
      <section>
        <label>Detalle:</label>
        <input
          type="text"
          value={detalle}
          placeholder={campos.detalle}
          onChange={(e) => setDetalle(e.target.value)}
        />
      </section>
    </div>
  );
};

export default Modal;
