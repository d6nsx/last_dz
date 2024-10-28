import React, { useEffect, useState } from 'react';
import PokemonList from '../../components/pokemonlist/PokemonList';
import classes from '../PokemonPage/PokemonPage.module.scss';

const PokemonPage = () => {
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
    const [pokemons, setPokemons] = useState([]);
    const [limit] = useState(12);
    const [offset, setOffset] = useState(0);

    const getPokemons = async () => {
        try {
            const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
            const data = await response.json();
            setPokemons(data.results);
        } catch (error) {
            console.error('Failed to fetch Pokémon data', error);
        }
    };

    useEffect(() => {
        getPokemons();
    }, [offset]);

    return (
        <div className={classes.pokemonpage}>
            <h1>Pokémon List</h1>
            <PokemonList pokemons={pokemons} />
            <div className={classes.pagination}>
                <button onClick={() => setOffset(offset - limit)} disabled={offset === 0}>Previous</button>
                <button onClick={() => setOffset(offset + limit)}>Next</button>
            </div>
        </div>
    );
};

export default PokemonPage;
