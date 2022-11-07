import axios from "axios";
import { useEffect, useState } from "react";

import { API_KEY, API_URL } from "../constants/variables";
import { ApiProps } from "../types/types";

export const useFetch = (query: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<ApiProps | null>(null);
  const [resError, setResError] = useState<unknown>(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(API_URL, {
        params: {
          q: query,
          units: "metric",
          APPID: API_KEY,
        },
      });
      setApiData(data);
      setIsLoading(false);
    } catch (error) {
      setResError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      fetchData();
    } else {
      setApiData(null);
    }
  }, [query]);

  return { isLoading, apiData, resError };
};
