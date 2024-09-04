import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import CountryDetails from '../components/CountryDetails';
//import styles from '../styles/Modal.css';

const Modal = ({ selectedCountry, modalState, closeModal }) => {
    return (
        <>

            {<div id="myModal" className={styles.modal} style={{ display: modalState }}>

                <div className={styles.modalContent}>
                    <span className={styles.close} onClick={() => closeModal()}>&times;</span>
                    <p><CountryDetails selectedCountry={selectedCountry}></CountryDetails></p>
                </div>

            </div>}
        </>
    )
}

export default Modal;