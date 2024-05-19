import { getWindData } from "@/lib/weather-info";
import Image from "next/image";

const WindComponent = async({lat,lon}) => {
   const {speed,deg}=await getWindData(lat,lon)

   return (
      <div class="card">
      <h6 class="feature-name">Wind</h6>
      <div class="feature-main">
        <Image
          class="max-w-20"
          src="/icon_wind.png"
          alt="rain icon"
          width={80}
          height={80}
        />
        <h3 class="feature-title">{speed} m/s</h3>
        <span class="feature-name">{deg} degrees</span>
      </div>
    </div>
   );
};

export default WindComponent;