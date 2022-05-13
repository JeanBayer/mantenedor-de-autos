import React from "react";
import image from "../../assets/image/people_cuadrado.png";
import SelectCar from "./SelectCar";

const HeaderPerfil = ({
  usuario,
  cars,
  selectedCar,
  setSelectedCar,
  filteredCar,
}) => {
  const { nombre, rut, email, celular } = usuario;
  return (
    <header className="w-full sm:w-3/4 max-w-xl mx-auto grid grid-cols-2 gap-4 rounded-lg shadow-md px-4 py-2 mt-2">
      <section className="grid grid-cols-3">
        <img
          src={image}
          className="rounded-full w-10 justify-self-center self-center"
        />
        <div className="col-span-2">
          <h2 className="font-bold">{nombre}</h2>
          <p className="text-xs">{rut}</p>
          <p className="text-xs">{celular}</p>
          <p className="text-xs">{email}</p>
        </div>
      </section>
      <section>
        <SelectCar
          cars={cars}
          selectedCar={selectedCar}
          setSelectedCar={setSelectedCar}
        />
        <p className="text-xs text-center">
          Última mantención:{" "}
          <span>{filteredCar && filteredCar.ultima_revision}</span>
        </p>
      </section>
    </header>
  );
};

export default HeaderPerfil;
