import { Grid } from "@mui/material";
import WeatherCard from "./WeatherCard";
import { ListItem } from "../utils/api";
import LoadingScreen from "../utils/LoadingScreen";
import { dateToWeekday, k2f } from "../utils/utils";
import UseWeatherHistory from "../utils/UseWeatherHistory";

const WeatherHistoy = ({ latlang }: { latlang: string }) => {
  const { weatherHistory, loading } = UseWeatherHistory({ latlang });
  let weatherCards: any = [];
  if (weatherHistory) {
    weatherCards = weatherHistory.map((obj: ListItem) => (
      <Grid item sm={6} md={4} lg={3} key={Math.random()}>
        <WeatherCard
          high={k2f(obj.main.temp_max)}
          low={k2f(obj.main.temp_min)}
          humidity={obj.main.humidity}
          pressure={obj.main.pressure}
          weatherType={obj.weather[0].main}
          date={dateToWeekday(obj.dt_txt.split(" ")[0])}
        />
      </Grid>
    ));
  }

  return (
    <Grid
      spacing={2}
      marginTop={2}
      container
      direction={"row"}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? <LoadingScreen /> : weatherCards.map((obj: any) => obj)}
    </Grid>
  );
};

export default WeatherHistoy;
