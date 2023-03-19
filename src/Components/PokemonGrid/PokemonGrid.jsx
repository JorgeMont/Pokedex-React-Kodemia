import React from "react";
import './PokemonGrid.scss';
import Card from "@mui/material/Card";
import ImagePoke from "../UI_Components/ImagePoke/ImagePoke";

const PokemonGrid = ({ listaPokes }) => {
    return (
        listaPokes.length !== 0 ?
            <div className="pokeGrid">
                {
                    listaPokes.map(
                        (pokemon) =>
                            <Card
                                variant="outlined"
                                className="gridCard"
                            >
                                {
                                    <>
                                        <ImagePoke url={pokemon.url} />
                                        <h2>{pokemon.name}</h2>
                                    </>
                                }
                            </Card>
                    )
                }
            </div>

            :
            <p>Cargando...</p>

    );
}

export default PokemonGrid;