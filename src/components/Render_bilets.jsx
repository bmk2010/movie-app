import React from "react";
import OneTicket from "../components/OneTicket";
import Panda from "../assets/panda-cin.png";
import panda from "../assets/kung.png";
import pila from "../assets/pila.png";
import useStore from "../redux/zustand";

function Render_bilets({ openFunc }) {
  const { tickets } = useStore();

  return (
    <div className="flex flex-col gap-4">
      <OneTicket
        open={openFunc}
        title="Кунг Фу Панда 4"
        img={Panda}
        buy={true}
        history={false}
      />
      <OneTicket
        open={openFunc}
        title="Кунг Фу Панда 4"
        img={panda}
        buy={true}
        history={false}
      />
      <OneTicket
        open={openFunc}
        title="Пила / Джокер новый...."
        img={pila}
        buy={false}
        history={false}
      />
      {tickets.map((ticket) => (
        <OneTicket
          open={openFunc}
          title={ticket.title}
          img={ticket.img}
          buy={false}
          history={false}
        />
      ))}
    </div>
  );
}

export default Render_bilets;
