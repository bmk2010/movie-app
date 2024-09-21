import React from "react";

function Render({data = []}) {
  return (
    <>
      <div className="mx-[90px]">
        <h3 className="text-[20px] mb-5">На неделе</h3>

        <div className="flex flex-wrap gap-5">

          {data.map((movie, i) => (
            <div key={i} className="flex flex-col gap-[10px] hover:bg-gray-950 group">
              <div className="w-[280px] h-[400px] bg-[#1D1D1D] rounded-[12px]">
                <img width={"280px"} className="h-[400px]" src={movie.img} alt="" />
              </div>
              <h4
                style={{
                  transitionProperty: "all",
                  transitionTimingFunction: "cubic - bezier(0.4, 0, 0.2, 1)",
                  "transition-duration": "0.2s",
                }}
                className="font-medium w-[188px] text-[24px] group-hover:font-extrabold"
              >
                {movie.title}
              </h4>
              <p className="text-[#4D4D4D] text-[14px] group-hover:text-white">
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
