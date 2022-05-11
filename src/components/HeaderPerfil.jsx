import React from "react";
import image from "../../assets/image/people_cuadrado.png";
import SelectCar from "./SelectCar";

const HeaderPerfil = () => {
  return (
    <header className="w-full sm:w-3/4 max-w-xl mx-auto grid grid-cols-2 gap-4 rounded-lg shadow-md px-4 py-2 mt-2">
      <section className="grid grid-cols-3">
        <img
          src={image}
          className="rounded-full w-10 justify-self-center self-center"
        />
        <div className="col-span-2">
          <h2 className="font-bold">Jhan Carlos Mora Bayer</h2>
          <p className="text-xs">25.582.817-7</p>
          <p className="text-xs">953363457</p>
          <p className="text-xs">jhanbayer@gmail.com</p>
        </div>
      </section>
      <section className="">
        <SelectCar />
        <p className="text-xs text-center">
          Última mantención: <span>22/05/2022</span>
        </p>
      </section>
    </header>
  );
};

export default HeaderPerfil;
