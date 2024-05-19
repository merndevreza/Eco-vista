import AQIComponent from "@/components/AQIComponent";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const AQIPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.latitude && resolved?.longitude) {
    return <AQIComponent lat={resolved.latitude} lon={resolved.longitude} />;
  }
  return <NoLocationInfo location={location} />;
};

export default AQIPage;
