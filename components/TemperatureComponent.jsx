import { getTemperatureData } from "@/lib/weather-info";
import Image from "next/image";

const TemperatureComponent = async({lat,lon}) => {
   const main=await getTemperatureData(lat,lon) 
   return (
      <div className="card">
                <h6 className="feature-name">Current Temperature</h6>
                <div className="feature-main">
                  <Image
                    className="max-w-20"
                    src="/icon_tempareture.png"
                    alt="rain icon"
                    width={80}
                    height={80}
                  />
                  <h3 className="feature-title">{main?.temp}°C</h3>

                  <span className="feature-name">Feels Like {main?.feels_like}°C</span>
                </div>
              </div>
   );
};

export default TemperatureComponent;