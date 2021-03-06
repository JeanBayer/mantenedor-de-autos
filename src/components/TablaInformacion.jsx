import iconAñadir from "../../assets/image/icons8-añadir-50.png";

const TablaInformacion = ({ filteredCar, setModal, setCampos }) => {
  return (
    <>
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
          {Object.keys(filteredCar ?? {}).length > 0 &&
            filteredCar.informacion.map((info) => (
              <tr
                key={info.id}
                className="hover:cursor-pointer hover:bg-slate-300 transition-colors duration-500 border-t text-sm sm:text-lg"
                onClick={() => {
                  setCampos(info);
                  setModal(true);
                }}
              >
                <td className="text-center">{info.descripcion}</td>
                <td className="text-center">{info.detalle}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <section className="absolute bottom-4 right-4">
        <img className="hover:cursor-pointer" src={iconAñadir} />
      </section>
    </>
  );
};

export default TablaInformacion;
