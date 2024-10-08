import { Stack, Typography } from "@mui/material";
import { k2f } from "../utils/utils";
import { WeatherData } from "../utils/api";

interface weatherDataProps {
  weatherData: WeatherData;
  city: string;
}

const CurrentWeather: React.FC<weatherDataProps> = ({ weatherData, city }) => {
  let cityName: string = city.split(", ")[0];

  return (
    <div style={{ width: "25%" }}>
      <Stack alignItems={"center"}>
        <Typography style={{ fontSize: "2rem" }} height={30}>
          {`${cityName}`}
        </Typography>
        <Typography style={{ fontSize: "4rem" }} height={70}>
          {`${k2f(weatherData.main.temp)}°F`}
        </Typography>
        <Typography
          style={{ fontSize: "1rem" }}
        >{`${weatherData.weather[0].main}`}</Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "70%",
          }}
        >
          <Typography>{`H:${k2f(weatherData.main.temp_max)}°`}</Typography>
          <Typography>{`L:${k2f(weatherData.main.temp_min)}°`}</Typography>
        </div>
      </Stack>
    </div>
  );
};

export default CurrentWeather;
