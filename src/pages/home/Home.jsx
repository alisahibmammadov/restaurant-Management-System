import React from "react";
import Menu from "../../components/menu/Menu";
import CardList from "../../components/cardList/CardList";
import Hero from "../../components/hero/Hero";

function Home({addToCart}) {
  return (
    <div>
      <Hero/>
      <CardList addToCart={addToCart}/>
      <Menu />
    </div>
  );
}

export default Home;
