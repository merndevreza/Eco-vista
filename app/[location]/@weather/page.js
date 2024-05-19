import NoLocationInfo from "@/components/NoLocationInfo";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WeatherPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.latitude && resolved?.longitude) {
    return (
      <WeatherComponent lat={resolved.latitude} lon={resolved.longitude} />
    );
  }
  return <NoLocationInfo location={location} />;
};

export default WeatherPage;