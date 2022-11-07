import React, { useState } from "react";
import { Box, TextField, Typography, useTheme } from "@mui/material";

import { useFetch } from "../../hooks/useFetch";
import { LoadingSpinner } from "../../components/LoadingSpinner";

import { HomeSx } from "./styles";
import { WeatherBox } from "./WeatherBox";

const Home = () => {
  const theme = useTheme();
  const [city, setCity] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const { isLoading, apiData, resError } = useFetch(city);

  const { WrapperSx, GridItemSx, TextFieldSx } = HomeSx(theme);

  console.log(isLoading, apiData, resError);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      setCity(value.trim());
    }
  };

  return (
    <Box sx={{ ...WrapperSx }}>
      <Box sx={{ ...GridItemSx, alignItems: "center" }}>
        <Typography sx={{ fontSize: 40, color: "common.white" }}>
          The Weather App You need!
        </Typography>
        <TextField
          size="small"
          value={value}
          placeholder="Enter the city name in here"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={!!isLoading}
          sx={{ ...TextFieldSx }}
        />
      </Box>
      <Box
        sx={{
          ...GridItemSx,
          bgcolor: "rgba(0, 0, 0, .8)",
        }}
      >
        <WeatherBox apiData={apiData} />
      </Box>
      {!!isLoading && <LoadingSpinner />}
    </Box>
  );
};

export default Home;
