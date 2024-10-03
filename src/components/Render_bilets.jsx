import React from 'react'
import OneTicket from "../components/OneTicket"
import Panda from "../assets/panda-cin.png"
import panda from "../assets/kung.png";
import pila from "../assets/pila.png";


function Render_bilets() {
  return (
    <div className='flex flex-col gap-4'>
      <OneTicket title='Кунг Фу Панда 4' img={Panda} buy={true} history={false} />
      <OneTicket title='Кунг Фу Панда 4' img={panda} buy={true} history={false} />
      <OneTicket title='Пила / Джокер новый....' img={pila} buy={false} history={false} />
    </div>
  )
}

export default Render_bilets