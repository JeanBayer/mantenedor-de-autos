import { useEffect, useState } from "react";

const SelectCar = ({ cars, selectedCar, setSelectedCar }) => {
  return (
    <>
      <select
        name="select"
        value={selectedCar}
        onChange={(e) => setSelectedCar(e.target.value)}
        className="w-full px-4 text-gray-500 uppercase"
      >
        <option value="">Seleccione un auto</option>
        {/* #TODO: tengo problemas con el id */}
        {cars &&
          cars.map((car, index) => (
            <option
              key={car.id ? car.id : index}
              value={car.id}
              className="uppercase"
            >
              {car.modelo}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectCar;
