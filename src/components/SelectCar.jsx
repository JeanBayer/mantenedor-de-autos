import styles from "../styles/SelectCar.module.css";

const SelectCar = ({ cars, selectedCar, setSelectedCar }) => {
  return (
    <select
      name="select"
      value={selectedCar}
      onChange={(e) => setSelectedCar(e.target.value)}
      className={styles.select}
    >
      <option value="">Seleccione un auto</option>
      {Object.keys(cars[0] ?? {}).length > 0 &&
        cars.map((car) => {
          return (
            <option key={car.id} value={car.id} className="uppercase">
              {car.modelo}
            </option>
          );
        })}
    </select>
  );
};

export default SelectCar;
