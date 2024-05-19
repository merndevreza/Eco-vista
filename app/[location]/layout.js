import Image from "next/image";
import "../globals.css";

export const metadata = {
  title: "Eco Vista",
  description: "One place for weather info",
};

export default function RootLayout({
  children,
  weather,
  aqi,
  wind,
  temperature,
}) {
  return (
    <div className="wrapper">
      <Image
        className="bg-img h-screen"
        src="/background.png"
        height={700}
        width={1800}
        alt="Background image"
      />
      <div className="overlay h-screen"></div>
      <main className="!z-50 w-full">
        <div className="container ">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
              {children}
            </div>
            <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
              {weather}
            </div>
            <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
              {aqi}
            </div>
            <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
              {wind}
            </div>
            <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
              {temperature}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
