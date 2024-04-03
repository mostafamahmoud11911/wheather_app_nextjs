import { convertKelvinToCelsius } from "@/utils/convertkelvinToCelsius";
import Container from "../Container/Container";
import WeatherDetails, { WeatherDetailsProps } from "../WeatherDetails/WeatherDetails";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

export interface ForecastWeatherDetailProps extends WeatherDetailsProps {
  weatherIcon: string;
  date: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
  day: string
}

export default function ForcastWeatherDetails(
  props: ForecastWeatherDetailProps
) {
  return (
    <Container className="gap-4">
        {/* left section */}
      <section className="flex gap-4 items-center px-4">
        <div className=" flex flex-col gap-1 items-center">
          <WeatherIcon iconname={props.weatherIcon} />
          <p>{props.date}</p>
          <p className="text-sm">{props.day}</p>
        </div>
        <div className="flex flex-col px-4">
          <span className="text-5xl">
            {convertKelvinToCelsius(props.temp ?? 0)}°
          </span>
          <p className="text-xs space-x-1 whitespace-nowrap">
            <span>Feels like</span>
            <span>{convertKelvinToCelsius(props.feels_like ?? 0)}°</span>
          </p>
          <p>{props.day}</p>
          <p className="capitalize">{props.description}</p>
        </div>
      </section>
      {/* right section */}
      <section className="overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10">
<WeatherDetails {...props}/>
      </section>
    </Container>
  );
}
