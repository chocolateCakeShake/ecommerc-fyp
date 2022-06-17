import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Desc = styled.div`
  margin-left: 3%;
  font-weight: 600;
  font-size: 24px;
`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider /> <Desc>Categories:</Desc>
      <Categories />
      <Desc>Popular:</Desc>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
