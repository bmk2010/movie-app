import React from "react";
import logo from "../assets/logo.svg";
import afisha from "../assets/afisha.svg";
import seans from "../assets/Transfer.svg";
import bileti from "../assets/Monitoring.svg";
import search from "../assets/search.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-[90px] flex justify-between mb-3 items-center">
      <Link to={"/"}>
        <div>
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="flex">
        <button>
          <img src={afisha} alt="" />
        </button>
        <button>
          <img src={seans} alt="" />
        </button>
        <button>
          <img src={bileti} alt="" />
        </button>{" "}
        <button>
          <img src={search} alt="" />
        </button>
      </div>
      <div className="flex gap-[20px]">
        <select className="p-[15px] bg-[#1D1D1D80] rounded-[12px] outline-none">
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>
        <Link to={"/login"}>
          <button className="bg-[#C61F1F] px-[67px] py-[18px] rounded-[12px]">
            Войти
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
