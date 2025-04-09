import { useEffect, useState } from "react";

export const usePayloadData = <T>(api: string) => {
  const [data, setData] = useState<T[]>([]);

  const fetchData = async (api: string) => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();

      // Payload повертає дані у форматі { docs: T[] }
      if (result.docs && Array.isArray(result.docs)) {
        setData(result.docs);
      } else {
        console.error("Expected docs array but got:", result);
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData(api);
  }, [api]);

  return data;
};
