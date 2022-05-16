import { useState, useEffect } from "react";

const Modal = ({ campos, updateCampos }) => {
  const [descripcion, setDescripcion] = useState("");
  const [detalle, setDetalle] = useState("");

  useEffect(() => {
    setDescripcion(campos.descripcion);
    setDetalle(campos.detalle);
  }, [campos]);

  return (
    <div className="box-border absolute top-0 left-0 px-10 py-2 h-full w-full bg-slate-400 grid grid-cols-1 grid-rows-7 rounded-lg shadow-md">
      <h2 className="row-start-1 font-bold text-center text-lg">
        Editar campos
      </h2>
      <label
        htmlFor="descripcion"
        className="grid grid-rows-[25px_35px] row-start-2 mt-4 mb-2"
      >
        <span className="uppercase text-sm font-bold">
          Descripcion:
        </span>
        <input
          id="descripcion"
          className="row-start-2 w-full p-3 border-gray-600 rounded-lg"
          type="text"
          value={descripcion}
          placeholder={campos.descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </label>
      <label form="detalle" className="grid grid-rows-[25px_35px] row-start-4 mb-2">
        <span className="uppercase text-sm font-bold">
          Detalle:
        </span>
        <input
          id="detalle"
          type="text"
          value={detalle}
          placeholder={campos.detalle}
          onChange={(e) => setDetalle(e.target.value)}
          className="row-start-2 w-full p-3 border-gray-600 rounded-lg"
        />
      </label>
      <button
        className="row-start-6 p-3 mt-3 mx-auto bg-indigo-900 font-bold uppercase text-white rounded-lg shadow-md w-full"
        onClick={() => {
          updateCampos({ ...campos, descripcion, detalle });
        }}
      >
        Aceptar
      </button>
      <button className="row-start-7 p-3 mb-2 mt-3 mx-auto bg-teal-900 font-bold uppercase text-white rounded-lg shadow-md w-full">
        Cancelar
      </button>
    </div>
  );
};

export default Modal;
