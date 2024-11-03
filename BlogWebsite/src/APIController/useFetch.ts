import { useEffect, useState } from "react";

export function useFetch<T>(link: URL) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(link, { signal: abortController.signal })
      .then((respuesta) => {
        respuesta.json().then((newData) => {
          setData(newData);
        });
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
    return () => abortController.abort();
  }, []);

  return { data, loading, error };
}
