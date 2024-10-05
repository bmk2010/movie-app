import React, { useState } from "react";
import MainLayout from "../layouts/Main_layout";
import Render_bilets from "../components/Render_bilets";
import HistoryTickets from "../components/HistoryTickets";
import Payment_modal from "../components/Payment_modal";

function Bileti() {
  const [biletTab, setBiletTab] = useState(1);
  const [open, setOpen] = useState(false)

  return (
    <>
      <MainLayout>
        <div className="flex items-center mt-12 flex-col">
          <div className="flex mb-14">
            <button
              onClick={() => setBiletTab(1)}
              className={`w-[188px] rounded-xl py-4 ${
                biletTab == 1 ? "bg-[#1D1D1D] text-[#C61F1F]" : "bg-[#111111]"
              }`}
            >
              Активные
            </button>
            <button
              onClick={() => setBiletTab(2)}
              className={`w-[188px] rounded-xl py-4 ${
                biletTab == 2 ? "bg-[#1D1D1D] text-[#C61F1F]" : "bg-[#111111]"
              }`}
            >
              История
            </button>
          </div>
          {biletTab == 1 ? <Render_bilets openFunc={setOpen} /> : <HistoryTickets />}
        </div>
      </MainLayout>

      <Payment_modal open={open} func={setOpen} />
    </>
  );
}

export default Bileti;
