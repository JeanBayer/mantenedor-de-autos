import { useState, useEffect } from "react";
import HeaderPerfil from "./components/HeaderPerfil";
import TablaInformacion from "./components/TablaInformacion";

function App() {
  const [usuario, setUsuario] = useState([{}]);
  const [cars, setCars] = useState([{}]);
  const [selectedCar, setSelectedCar] = useState("hola");

  useEffect(() => {
    const traerDatos = async () => {
      const response = await fetch("../assets/datos.json");
      const data = await response.json();
      setUsuario(data);
    };
    traerDatos();
  }, []);

  useEffect(() => {
    if (usuario.autos) {
      const listado = usuario.autos.map((car) => {
        return {
          id: car.id,
          modelo: car.modelo,
        };
      });
      setCars(listado);
    }
  }, [usuario]);

  return (
    <>
      <HeaderPerfil
        cars={cars}
        selectedCar={selectedCar}
        setSelectedCar={setSelectedCar}
      />
      <TablaInformacion />
    </>
  );
}

export default App;
