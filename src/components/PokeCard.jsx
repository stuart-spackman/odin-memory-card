import { useState, useEffect } from 'react';

import '../styles/PokeCard.css'

export default function PokeCard(
    { number, clickFunction }
) {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        let ignore = false;
        if (!ignore) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
                .then((result) => {
                    return result.json()
                })
                .then((data) => {
                    setPokemon(
                        {
                            name: data.name,
                            number: data.id,
                            imageUrl: data.sprites.front_default
                        }
                    )

                })
                .catch(() => {
                    console.log(`Caught an error when fetching Pokemon ${number}: `);
                    console.log(e);
                });
        }
        return () => {
            ignore = true;
        }
    }, [number]);

    return (
        <button
            className={`number ${number}`}
            onClick={clickFunction}
        >
            <img src={pokemon.imageUrl} alt="A Pokemon was supposed to be here." />
            <p>{`${pokemon.name}`}</p>
            <img src={pokemon.imageUrl} alt="A Pokemon was supposed to be here." />
        </button>
    )
}


