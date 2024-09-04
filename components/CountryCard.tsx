import styles from '../styles/Home.module.css';

const CountryCard = ({ country, onClick }) => {
    return (
        <div className={styles.gridItem} onClick={onClick}>
            <img src={country.flags.png} alt={`${country.name.common} flag`} width="200px" height="100px" />
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital?.[0]}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
        </div>
    )
}

export default CountryCard;