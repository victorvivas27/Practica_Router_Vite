import React, { useEffect, useState } from "react";
import CardBeer from "../cardbeer/CardBeer";
import { optenerBeers } from "../../../api/apibeers/beers";
import Modal from "../modal/Modal";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const getBeers = async () => {
      const beerData = await optenerBeers();
      setBeers(beerData)
    }
    getBeers(); 
    setLoading(false);
  }, []);
  console.log(beers);

  return (
    <div className="grid">
      {loading ? (
        <Modal />
      ) : (
        beers.map((beer) => <CardBeer data={beer} key={beer.id} />)
      )}
    </div>
  );
};

export default Beers;
