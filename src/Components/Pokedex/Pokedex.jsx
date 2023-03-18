import React, { useEffect, useState } from "react";
import "./Pokedex.scss";
import Card from "@mui/material/Card";
import CardSolo from "../CardSolo/CardSolo";
import getPokemon from "../../Helpers/getPokemon.js";
import CardsTodos from "../CardsTodos/CardsTodos";

const apiURL = `https://pokeapi.co/api/v2/pokemon/`;

const Pokedex = () => {
  const [pokeList, setPokeList] = useState([]);

  //Cuando nace el componente
  useEffect(() => {
    //Carga los datos
    (async () => {
      const pokeData = await getPokemon(apiURL);
      setPokeList(pokeData.results);
    })();
    // console.log(pokeList);
  }, []);

  return (
    <>
      <main className="pokeApp">
        <section className="CardSolo">
            <Card variant="outlined">
                {<CardSolo />}
            </Card>
        </section>
        <section className="CardVarios">
          {pokeList.length === 0 ? (
            <p>PokeList está vacio</p>
          ) : (
            <CardsTodos listaPoke={pokeList} />
          )}
        </section>
      </main>
    </>
  );
};

export default Pokedex;

