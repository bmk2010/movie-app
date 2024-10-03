import React from "react";
import logo from "../assets/logo.svg";
import afisha from "../assets/afisha.svg";
import activeAfisha from "../assets/whiteMain.svg";
import seans from "../assets/Transfer.svg";
import bileti from "../assets/Monitoring.svg";
import search from "../assets/search.svg";
import activeSeans from "../assets/redSeans.svg";
import activeBilet from "../assets/active_bilet.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const Token = localStorage.getItem("Token");
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="px-[90px] flex justify-between mb-3 items-center">
      <Link to={"/"}>
        <div>
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="flex">
        <button onClick={() => navigate("/")}>
          <img src={location.pathname === '/' ? afisha : activeAfisha} alt="" />
        </button>
        <button onClick={() => navigate("/seans")}>
          <img src={location.pathname === '/seans' ? activeSeans : seans} alt="" />
        </button>
        <button onClick={() => navigate("/bilet")}>
          <img src={location.pathname === '/bilet' ? activeBilet : bileti} alt="" />
        </button>
        <button>
          <img src={search} alt="" />
        </button>
      </div>
      <div className="flex gap-[20px]">
        <select className="p-[15px] bg-[#1D1D1D80] rounded-[12px] outline-none">
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>
        <Link to={Token ? '/profile' : '/login'}>
          <button className="bg-[#C61F1F] px-[67px] py-[18px] rounded-[12px]">
            {Token ? "профиль" : "Войти"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
