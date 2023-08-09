import axios from 'axios';
import  { useEffect, useState } from 'react';
const baseUrl="http://localhost:8000/api"
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await axios.get(baseUrl+url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetchData = async () => {
    fetchData();
  };

  return { data, loading, error, refetchData };
};

export default useFetch;
