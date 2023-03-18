import React from 'react';
import Card from '@mui/material/Card';
import ImagePoke from '../ImagePoke/ImagePoke';

const CardsTodos = ({listaPoke}) => {
    // console.log(listaPoke);
    const handleClick = (url) => {
        console.log('Me clickearon', url);
    }

    return(
        <>
            {listaPoke.map((pokemon)=>
            <Card 
            key={pokemon.name} 
            variant="outlined"
            className=''
            onClick={()=>{handleClick(pokemon.url)}}
            >
                <ImagePoke url={pokemon.url} />
                {pokemon.name}
            </Card>
            
            )}
        </>
        
    );
}

export default CardsTodos;
