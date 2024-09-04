import styles from '../styles/Home.module.css';

const CountryDetails = ({ selectedCountry }) => {
    return (
        <>
            <div className="modal">
                <h2>{selectedCountry.name.official}</h2>
                <p>Capital: {selectedCountry.capital?.[0]}</p>
                <p>Population: {selectedCountry.population.toLocaleString()}</p>
                <p>Region: {selectedCountry.region}</p>
                <p>Time Zones: {selectedCountry.timezones.join(', ')}</p>
                <p>Currencies: {Object.values(selectedCountry.currencies).map(curr => `${curr.name} (${curr.symbol})`).join(', ')}</p>
                <p>Languages: {Object.values(selectedCountry.languages).join(', ')}</p>
            </div>

        </>
    )
}

export default CountryDetails;