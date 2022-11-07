import React from "react";
import { Badge, Box, Typography, useTheme } from "@mui/material";

import { ApiProps } from "../../types/types";
import { HomeSx } from "./styles";

interface WeatherBoxProps {
  apiData: ApiProps | null;
}

export const WeatherBox: React.FC<WeatherBoxProps> = ({ apiData }) => {
  const theme = useTheme();

  const { WeatherBoxSx } = HomeSx(theme);

  return (
    <Box sx={{ textAlign: "left" }}>
      {apiData && (
        <>
          <Typography
            sx={{ fontSize: 20, color: "common.white", fontWeight: 600, mb: 1 }}
          >
            {new Date().toLocaleDateString("en-US")}
          </Typography>
          <Box sx={{ ...WeatherBoxSx }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: 30 }}>
                <Badge
                  color="secondary"
                  overlap="circular"
                  badgeContent={apiData.sys.country}
                  variant="standard"
                  sx={{
                    "& span": {
                      top: "35%",
                      right: "-12%",
                    },
                  }}
                >
                  {apiData.name}
                </Badge>
              </Typography>
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "primary.main",

                  "& > span": {
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontWeight: 400,
                  },
                }}
              >
                {apiData?.main.temp} <span> °C</span>
              </Typography>
              <Box>
                {apiData.weather.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                      {item.main}
                    </Typography>
                    <Box
                      component="img"
                      src={`https://openweathermap.org/img/wn/${item.icon}.png`}
                    />
                    <Typography
                      sx={{ fontSize: 20, fontWeight: 400, width: "100%" }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                alignSelf: "center",
                "& p": { fontSize: 20 },
                "& span": { fontFamily: "'Source Sans Pro', sans-serif" },
              }}
            >
              <Typography>Humidity: {apiData.main.humidity} %</Typography>
              <Typography>Cloud Cover: {apiData.clouds.all}</Typography>
              <Typography>Wind: {apiData.wind.speed} m/s</Typography>
              <Typography>
                Max Temp: {apiData.main.temp_max} <span> °C</span>
              </Typography>
              <Typography>
                Min Temp: {apiData.main.temp_min} <span> °C</span>
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};
