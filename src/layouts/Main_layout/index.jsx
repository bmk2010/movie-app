import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainLayout = (prop) => {
  return (
    <>
      <Header />
      {prop.children}
      <Footer />
    </>
  );
};

export default MainLayout;
