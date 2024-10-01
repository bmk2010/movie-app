import React from "react";
import { useNavigate } from "react-router";

function Render({ data = [] }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-[90px]">
        <h3 className="text-[20px] mb-5">На неделе</h3>

        <div className="flex flex-wrap gap-5">
          {data.map((movie) => (
            <div
              onClick={() => {
                navigate(`/${movie.id}`);
              }}
              key={movie.id}
              className="flex flex-col gap-[10px] hover:bg-gray-950 group"
            >
              <div className="w-[280px] h-[400px] bg-[#1D1D1D] rounded-[12px] overflow-hidden">
                <img
                  className="w-full h-full"
                  src={movie.img}
                  alt=""
                />
              </div>
              <h4 className="font-medium w-[188px] text-[24px] group-hover:font-extrabold transition-all duration-200 ease-in-out">
                {movie.title}
              </h4>
              <p className="text-[#4D4D4D] text-[14px] group-hover:text-white transition-all duration-200 ease-in-out">
                Комедия, Фэнтези
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Render;
