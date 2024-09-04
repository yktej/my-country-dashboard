import React, { useEffect, useState } from 'react';
import useFetch, { Country } from "@/hooks/useFetch";
import styles from '../styles/Home.module.css';
import CountryCard from '../components/CountryCard';
import Modal from '../components/Modal';

const COUNTRIES_URL = 'https://restcountries.com/v3.1/all';

const Home: React.FC = () => {

    const { data, loading, error } = useFetch({ url: COUNTRIES_URL });

    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [regions, setRegions] = useState<string[]>([]);

    const [modalState, setModalState] = useState('block');

    useEffect(() => {
        setCountries(data);
        let regions = new Set(data.map(country => country.region));
        setRegions([...regions]);
    }, [data]);

    const searchByName = (e) => {
        const searchTerm = e.target.value;
        setCountries(data.filter(country => {
            return country.name?.common.includes(searchTerm) || country?.capital?.includes(searchTerm)
        }));
    }

    const filterByRegion = (e) => {
        const region = e.target.value;
        setCountries(data.filter(country => country.region == region));
    }

    const sortByPopulation = (asc: boolean) => {
        setCountries(data.sort((country1, country2) => {
            if (asc) {
                return country1.population - country2.population;
            } else {
                return country2.population - country1.population;
            }
        }));
    }


    const closeModal = () => {
        setModalState('none');
        setSelectedCountry(null);
    }
    const openModal = (country) => {
        setModalState('block');
        setSelectedCountry(country);
    }

    return (
        <>
            search by name or capital: <input type="text" onChange={e => searchByName(e)}></input> <br></br>
            Filter by regions:
            <select onChange={e => filterByRegion(e)}>
                {regions.map(region => <option value={region}>{region}</option>)}
            </select>
            <div className={styles.grid}>
                {countries.slice(0, 10).map(country => (
                    <CountryCard country={country} onClick={() => openModal(country)}></CountryCard>
                ))}
            </div>
            <br></br>
            {selectedCountry && <Modal selectedCountry={selectedCountry} modalState={modalState}
                closeModal={closeModal}></Modal>}

        </>
    )

}

export default Home;