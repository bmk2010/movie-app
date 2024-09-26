import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/Main_layout";
import Slider from "../components/Slider";
import Render from "../components/Render";

function Home() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch("https://66ec461f2b6cf2b89c5decaa.mockapi.io/api/v1/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
      });
  }, []);

  return (
    <div className="max-w-[1360px] w-full mx-auto">
      <MainLayout>
        <Slider />
        <Render data={movieData} />
      </MainLayout>
    </div>
  );
}

export default Home;
