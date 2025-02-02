import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";


export default function WeatherIcon(
  props: React.HTMLProps<HTMLDivElement> & { iconname: string }
) {

  return (
    <div {...props} className={cn("relative h-20 w-20")}>
      <Image
        width={100}
        height={100}
        priority
        src={`https://openweathermap.org/img/wn/${props.iconname}@4x.png`}
        className="absolute h-full w-full"
        alt="weather-icon"
      />
    </div>
  );
}
