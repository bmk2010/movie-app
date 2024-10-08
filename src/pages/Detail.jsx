import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/Main_layout";
import Bileti from "../components/Bileti";
import About_film from "../components/About_film";
import useFetchData from "../hooks/Fetch";
import { Audio } from "react-loader-spinner";

const DetailPage = () => {
  const { id } = useParams();
  const [tab, setTab] = useState(1);

  const { data: movie, isLoading } = useFetchData(`/movies/${id}`);

  if (isLoading) {
    return (
      <Audio
        height="150"
        width="150"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperClass={"flex justify-center items-center mt-[50px]"}
      />
    );
  }

  return (
    <MainLayout>
      <div className="relative mb-12">
        <img
          src={movie.img}
          alt=""
          className="max-w-[1360px] w-full max-h-[640px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-black opacity-50"></div>
        <h1 className="absolute bottom-20 left-[40%] text-[32px] font-medium text-white">
          {movie.title}
        </h1>
      </div>

      <div className="max-w-[380px] w-full mx-auto">
        <button
          onClick={() => setTab(1)}
          className={`py-4 w-[188px] rounded-xl ${
            tab == 1 ? "bg-[#1D1D1D] text-[#C61F1F]" : "bg-[#111111]"
          }`}
        >
          Билеты
        </button>
        <button
          onClick={() => setTab(2)}
          className={`py-4 w-[188px] rounded-xl ${
            tab == 2 ? "bg-[#1D1D1D] text-[#C61F1F]" : "bg-[#111111]"
          }`}
        >
          О фильме
        </button>
      </div>
      {tab == 1 ? <Bileti /> : <About_film set={setTab} data={movie} />}
    </MainLayout>
  );
};

export default DetailPage;
