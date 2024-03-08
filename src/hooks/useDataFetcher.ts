import { useState, useEffect } from 'react';

interface DataResponse<T> {
    data: T;
  }
const useDataFetcher = <T>(service: () => Promise<DataResponse<T[]>>) => {
  const [data, setData] = useState<T[]>([]);

  const fetchData = async () => {
    try {
      const res = await service();
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return [data, fetchData];
};

export default useDataFetcher;
