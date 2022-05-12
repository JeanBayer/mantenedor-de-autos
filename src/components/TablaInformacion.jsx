import { useState } from "react";
import iconAñadir from "../../assets/image/icons8-añadir-50.png";

const TablaInformacion = () => {
  return (
    <div className="w-full sm:w-3/4 max-w-4xl mx-auto rounded-lg shadow-md px-6 py-6 mt-2 max-h-[32rem]">
      <h3 className="font-bold text-center py-2 text-lg">
        Infomacion del auto
      </h3>
      <table className="w-full">
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="hover:cursor-pointer hover:bg-slate-300 transition-colors duration-500 border-t text-sm sm:text-lg"
            onClick={() => console.log("click")}
          >
            <td>Focos en iluminacion trasera</td>
            <td>3 focos de 50 W cada uno</td>
          </tr>
          <tr
            className="hover:cursor-pointer hover:bg-slate-300 transition-colors duration-500 border-t text-sm sm:text-lg"
            onClick={() => console.log("click")}
          >
            <td>Focos en iluminacion trasera</td>
            <td>3 focos de 50 W cada uno</td>
          </tr>
        </tbody>
      </table>
      <section className="flex justify-end">
        <a className="hover:cursor-pointer">
          <img src={iconAñadir} />
        </a>
      </section>
    </div>
  );
};

export default TablaInformacion;
