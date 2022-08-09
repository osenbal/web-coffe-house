import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Features from "../../components/Features/Features";
import BookTable from "../../components/BookTable/BookTable";
import OurMenu from "../../components/OurMenu/OurMenu";
import Testimonial from "../../components/Testimonial/Testimonial";
import News from "../../components/News/News";
import Location from "../../components/Location/Location";

const Home = () => {
  return (
    <>
      <Navbar />
      <header>
        <Jumbotron />
      </header>
      <main>
        <Features />
        <BookTable />
        <OurMenu />
        <Testimonial />
        <News />
        <Location />
      </main>
    </>
  );
};

export default Home;
