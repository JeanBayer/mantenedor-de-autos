import { useState, useEffect } from "react";
import HeaderPerfil from "./components/HeaderPerfil";
import Modal from "./components/Modal";
import TablaInformacion from "./components/TablaInformacion";

function App() {
  const [usuario, setUsuario] = useState({});
  const [cars, setCars] = useState([{}]);
  const [selectedCar, setSelectedCar] = useState("");
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
      const response = await fetch(
        `http://localhost:3004/autos?usuario_id=${usuario.id}&id=${selectedCar}`
      );
      const data = await response.json();
      setFilteredCar(data[0]);
    };
    if (selectedCar !== "") {
      traerDatos();
      return;
    }
    setFilteredCar({});
  }, [selectedCar]);

  useEffect(() => {
    updateSelectedCar();
  }, [filteredCar]);

  const updateSelectedCar = () => {
    const updateDatos = async () => {
      const response = await fetch(
        `http://localhost:3004/autos/${selectedCar}`,
        {
          method: "PUT",
          body: JSON.stringify(filteredCar),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
    };
    if (selectedCar !== "") {
      updateDatos();
    }
  };

  const updateCampos = (camposActualizados) => {
    const newFilteredCar = filteredCar.informacion.map((campo) => {
      if (campo.id === camposActualizados.id) {
        return camposActualizados;
      }
      return campo;
    });
    setFilteredCar({ ...filteredCar, informacion: newFilteredCar });
    setModal(false);
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
      {modal && <Modal campos={campos} updateCampos={updateCampos} />}
    </>
  );
}

export default App;
