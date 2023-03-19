import React from "react";
import Card from "@mui/material/Card";

const SinglePokemon = ({pokeID}) => {



    return(
        pokeID !== 0 ?

        <Card 
        variant="outlined"
        >
            {}
        </Card>
        :
        <Card 
        variant="outlined"
        >
            {
                
                
                <>
                    <h2>Selecciona un Pokemon</h2>
                    <img src="https://gifimage.net/wp-content/uploads/2017/08/pokeball-gif-9.gif" alt="loading" />
                </>
            }
        </Card>
    );
}

export default SinglePokemon

