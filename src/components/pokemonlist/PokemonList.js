import React from 'react';
import Pokemon from '../pokemon/Pokemon';
import classes from './PokemonList.module.scss';

const PokemonList = ({ pokemons }) => {
    return (
        <div className={classes.pokemonlist}>
            {pokemons.map(pokemon => (
                <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList;