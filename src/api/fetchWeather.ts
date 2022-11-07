import axios from "axios";

const URL: string = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY: string = "9015466db7c1c3ac71fa49611aeb42ef";

export const fetchweather = async (query: string) => {

  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};