import { useEffect, useState } from "react";

const SelectCar = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const traerDatos = async () => {
      const response = await fetch("../public/datos.json");
      const data = await response.json();
      console.log(data.autos);
      setCars(data.autos);
    };
    traerDatos();
  }, []);

  return (
    <select name="select" className="w-full px-4 text-gray-500 uppercase">
      {cars.map((car) => (
        <option key={car.id} value={car.id} className="uppercase">
          {car.modelo}
        </option>
      ))}
    </select>
  );
};

export default SelectCar;
