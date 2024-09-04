import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Country {
    name: { common: string; official: string };
    capital: string[];
    population: number;
    region: string;
    flags: { png: string };
    currencies: Record<string, { name: string; symbol: string }>;
    languages: Record<string, string>;
    timezones: string[];
}

const useFetch = ({ url }: { url: string }) => {

    const [data, setData] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (err) {
                setError('failed to fetch the data');

            }
            setLoading(false);

        }
        fetchData();
    }, []);

    return { data, loading, error };
}

export default useFetch;