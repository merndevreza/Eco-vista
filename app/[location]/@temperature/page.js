import NoLocationInfo from "@/components/NoLocationInfo";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const TemperaturePage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.latitude && resolved?.longitude) {
    return (
      <TemperatureComponent lat={resolved.latitude} lon={resolved.longitude} />
    );
  }
  return  <NoLocationInfo location={location} />;
};

export default TemperaturePage;
