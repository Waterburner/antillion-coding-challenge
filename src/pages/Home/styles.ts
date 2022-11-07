import { Theme } from "@mui/material/styles";

const HomeSx = (theme: Theme) => {
  const WrapperSx = {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    textAlign: "center",
    background:
      'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.418)), url("https://i.ibb.co/R9hwSbx/bg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const GridItemSx = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    px: 10,
  };

  const TextFieldSx = {
    outline: "none",
    borderRadius: 1,
    border: "none",
    my: 2,
    maxWidth: 400,
    width: "100%",
    background: "rgba(250, 250, 250, 0.7)",
    fontSize: "20px",
    textAlign: "center",
  };

  const WeatherBoxSx = {
    p: 4,
    borderRadius: 2,
    bgcolor: "rgba(250, 250, 250, 0.7)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  };

  return {
    WrapperSx,
    GridItemSx,
    TextFieldSx,
    WeatherBoxSx,
  };
};

export { HomeSx };
