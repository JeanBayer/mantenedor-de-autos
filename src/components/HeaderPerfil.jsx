import React from "react";
import image from "../../assets/image/people_cuadrado.png";
import SelectCar from "./SelectCar";
import styles from "../styles/HeaderPerfil.module.css";

const HeaderPerfil = ({
  usuario,
  cars,
  selectedCar,
  setSelectedCar,
  filteredCar,
}) => {
  const { nombre, rut, email, celular } = usuario;
  return (
    <header className={`${styles.header} shadow`}>
      <section className={styles.informacion}>
        <img src={image} className={`${styles.avatar} shadow`} />
        <div className={styles.datos_usuario}>
          <h2>{nombre}</h2>
          <p>{rut}</p>
          <p>{celular}</p>
          <p>{email}</p>
        </div>
      </section>
      <section className={styles.select_carro}>
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
