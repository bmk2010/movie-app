import { useEffect, useState } from "react";
import Render from "./components/Render";
import Slider from "./components/Slider";
import MainLayout from "./layouts/Main_layout/index";

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch("https://66eef13b3ed5bb4d0bf26781.mockapi.io/api/v1/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data)
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

export default App;
