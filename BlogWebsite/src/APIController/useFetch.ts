import { useState } from "react";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchOptions {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

export const useFetch = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const request = async (
    url: string,
    options?: FetchOptions
  ): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Error" + response.status);
      }
      const data = await response.json();
      setData(data);
    } catch (error: any) {
      setError(error);
      alert("Error al completar la acción." + error);
    } finally {
      setLoading(false);
    }
  };
  return { data, error, loading, request };
};
