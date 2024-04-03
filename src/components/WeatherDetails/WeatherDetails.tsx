import { MdAir, MdOutlineRemoveRedEye } from "react-icons/md";
import { FiDroplet } from "react-icons/fi";
import { ImMeter } from "react-icons/im";
import { LuSunrise, LuSunset } from "react-icons/lu";

export interface WeatherDetailsProps {
  visability: string;
  humidity: string;
  windSpeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}

export default function WeatherDetails(props: WeatherDetailsProps) {
  return (
    <>
      <SingleWeatherDetail
        information="Visability"
        icon={<MdOutlineRemoveRedEye />}
        value={props.visability}
      />
      <SingleWeatherDetail
        information="Humidity"
        icon={<FiDroplet />}
        value={props.humidity}
      />
      <SingleWeatherDetail
        information="Wind speed"
        icon={<MdAir />}
        value={props.windSpeed}
      />
      <SingleWeatherDetail
        information="Air Pressure"
        icon={<ImMeter />}
        value={props.airPressure}
      />
      <SingleWeatherDetail
        information="Sunrise"
        icon={<LuSunrise />}
        value={props.sunrise}
      />
      <SingleWeatherDetail
        information="Sunset"
        icon={<LuSunset />}
        value={props.sunset}
      />
    </>
  );
}

export interface SingleWeatherDetailProps {
  information: string;
  icon: React.ReactNode;
  value: string;
}

function SingleWeatherDetail(props: SingleWeatherDetailProps) {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}
