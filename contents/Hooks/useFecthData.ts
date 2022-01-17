import { useState, useCallback } from 'react';

const useFecthData = <T extends { name: string }>(url: string) =>  {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchData = useCallback(async () => {
    setLoading(true);
    
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data.results);
      }).catch((error) => {
        console.log(error)
        setError(error?.response?.data);
      });

    setLoading(false);
  }, []);

  const deleteItem = useCallback((name) => {
    setData(oldData => {
      console.log(oldData, name)
      const newData = oldData.filter(item => item.name !== name)
      return newData;
    })
  }, [])

  // console.log('data', data)
  // console.log('loading', loading)
  // console.log('------------')

  return {
    fetchData,
    deleteItem,
    data,
    loading,
    error,
  };

  // return [
  //   fetchData,
  //   data,
  //   loading,
  //   error,
  // ];
};

export default useFecthData;
