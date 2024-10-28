import React, { useEffect, useState } from 'react';
import Modal from './ModalPokemon';
import classes from './Pokemon.module.scss';

const Pokemon = ({ pokemon }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchDetails = async () => {
        try {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            setPokemonDetails(data);
        } catch (error) {
            console.error('Failed to fetch Pokémon details', error);
        }
    };

    useEffect(() => {
        fetchDetails();
    }, []);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={classes.pokemoncard}>
            <h2>{pokemon.name}</h2>
            {pokemonDetails && (
                <img src={pokemonDetails.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
            )}
            <button className={classes.detailsbutton} onClick={handleOpenModal}>Подробнее</button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} pokemon={pokemonDetails} />
        </div>
    );
};

export default Pokemon;

