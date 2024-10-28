import React from 'react';
import styles from './ModalPokemon.module.scss';

const Modal = ({ isOpen, onClose, pokemon }) => {
    if (!isOpen || !pokemon) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                <p><strong>Height:</strong> {pokemon.height}</p>
                <p><strong>Weight:</strong> {pokemon.weight}</p>
                <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
            </div>
        </div>
    );
};

export default Modal;
