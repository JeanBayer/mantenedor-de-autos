import { useState, useEffect } from "react";
import HeaderPerfil from "./components/HeaderPerfil";
import TablaInformacion from "./components/TablaInformacion";

function App() {
  const [usuario, setUsuario] = useState({});
  const [cars, setCars] = useState([{}]);
  const [selectedCar, setSelectedCar] = useState("0");
  const [filteredCar, setFilteredCar] = useState({});
  const usuarioId = 1;

  useEffect(() => {
    const traerDatos = async () => {
      const response = await fetch(
        `http://localhost:3004/usuarios/${usuarioId}`
      );
      const data = await response.json();
      console.log(data);
      setUsuario(data);
    };
    traerDatos();
  }, []);

  useEffect(() => {
    const traerDatos = async () => {
      const response = await fetch(
        `http://localhost:3004/autos?usuario_id=${usuario.id}`
      );
      const data = await response.json();
      console.log(data);
      setCars(data);
    };
    traerDatos();
  }, [usuario]);

  useEffect(() => {
    const traerDatos = async () => {
      const response = await fetch(
        `http://localhost:3004/autos?usuario_id=${usuario.id}&id=${selectedCar}`
      );
      const data = await response.json();
      setFilteredCar(data);
    };
    traerDatos();
  }, [selectedCar]);

  const updateSelectedCar = () => {
    const updateDatos = async () => {
      const response = await fetch(
        `http://localhost:3004/autos/${selectedCar}`,
        {
          method: "PUT",
          body: JSON.stringify({
            usuario_id: 1,
            modelo: "ferrari",
            ultima_revision: "2020-05-11",
            informacion: [
              {
                descripcion: "Motor",
                detalle: "1.2",
              },
              {
                descripcion: "update 3",
                detalle: "2022",
              },
              {
                descripcion: "Cilindros",
                detalle: "4",
              },
              {
                descripcion: "Cilindrada",
                detalle: "1.2",
              },
            ],
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log({ data });
    };
    updateDatos();
  };

  return (
    <>
      <HeaderPerfil
        usuario={usuario}
        cars={cars}
        selectedCar={selectedCar}
        setSelectedCar={setSelectedCar}
        filteredCar={filteredCar}
      />
      <TablaInformacion filteredCar={filteredCar} />
      <button onClick={updateSelectedCar}>update</button>
    </>
  );
}

export default App;
