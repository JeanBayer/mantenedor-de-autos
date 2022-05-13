import { useState, useEffect } from "react";
import HeaderPerfil from "./components/HeaderPerfil";
import Modal from "./components/Modal";
import TablaInformacion from "./components/TablaInformacion";

function App() {
  const [usuario, setUsuario] = useState({});
  const [cars, setCars] = useState([{}]);
  const [selectedCar, setSelectedCar] = useState("0");
  const [filteredCar, setFilteredCar] = useState({});
  const [modal, setModal] = useState(false);
  const [campos, setCampos] = useState({});
  const usuarioId = 1;

  useEffect(() => {
    const traerDatos = async () => {
      const response = await fetch(
        `http://localhost:3004/usuarios/${usuarioId}`
      );
      const data = await response.json();
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
      setCars(data);
    };
    traerDatos();
  }, [usuario]);

  useEffect(() => {
    const traerDatos = async () => {
      if (selectedCar === "") {
        setFilteredCar({});
        return;
      }
      const response = await fetch(
        `http://localhost:3004/autos?usuario_id=${usuario.id}&id=${selectedCar}`
      );
      const data = await response.json();
      setFilteredCar(data[0]);
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
    };
    updateDatos();
  };

  const openModal = (info) => {
    const cambioCampos = {
      descripcion: "cambio",
      detalle: "cambio",
      id: info.id,
    };

    // const newFilteredCar = filteredCar.informacion.map((campo) => {
    //   if (campo.id === info.id) {
    //     return cambioCampos;
    //   }
    //   return campo;
    // });

    // console.log({ newFilteredCar });

    // const newCars = cars.map((car) => {
    //   if (String(car.id) === selectedCar) {
    //     car.informacion = newFilteredCar;
    //   }
    //   return car;
    // });

    // //TODO: esto hay que acomodar para hacer un put y de ahi refrescar la tabla
    // console.log({ newCars });
    // setCars(newCars);
    // setFilteredCar({ ...filteredCar, informacion: newFilteredCar });
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
      <TablaInformacion
        filteredCar={filteredCar}
        setModal={setModal}
        setCampos={setCampos}
      />
      {modal && <Modal campos={campos} />}
    </>
  );
}

export default App;
