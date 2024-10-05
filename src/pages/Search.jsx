import React, { useState } from "react";
import MainLayout from "../layouts/Main_layout";
import searchBtn from "../assets/search-line.svg";
import OneTicket from "../components/OneTicket";
import useFetchData from "../hooks/Fetch";

function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data } = useFetchData("/movies");

  const handleSearchFilm = (e) => {
    e.preventDefault(true);
    const filteredData = data.filter((movie) => movie.title == inputValue);
    setFilteredData(filteredData);
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center">
        <form
          onSubmit={(e) => handleSearchFilm(e)}
          className="mt-12 relative flex items-center max-w-[380px] w-full mb-12"
        >
          <button type="submit" className="absolute cursor-pointer left-5">
            <img src={searchBtn} alt="" />
          </button>
          <input
            placeholder="Названия фильма"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="max-w-[380px] w-full bg-[#111111] py-5 text-[#c3c3c3] outline-none pl-14 rounded-xl"
            type="text"
          />
        </form>

        {filteredData.length > 0 ? (
          <OneTicket title={filteredData[0].title} img={filteredData[0].img} />
        ) : (
          "Страница пока пуст"
        )}
      </div>
    </MainLayout>
  );
}

export default SearchPage;
