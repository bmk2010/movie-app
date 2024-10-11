import React, { useMemo } from "react";
import MainLayout from "../layouts/Main_layout";
import Slider from "../components/Slider";
import Render from "../components/Render";
import useFetchData from "../hooks/Fetch";
import { Audio } from "react-loader-spinner";

function Home() {
  let { data: movieData, isLoading, error } = useFetchData("/movies");

  const cachedData = useMemo(() => movieData, [movieData]);

  if (isLoading)
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
  
  if (error) return <div>Error loading movies...</div>;

  return (
    <div className="max-w-[1360px] w-full mx-auto">
      <MainLayout>
        <Slider />
        <Render data={cachedData} />
      </MainLayout>
    </div>
  );
}

export default Home;
