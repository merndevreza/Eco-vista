import NoLocationInfo from "@/components/NoLocationInfo";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WindPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.latitude && resolved?.longitude) {
    return <WindComponent lat={resolved.latitude} lon={resolved.longitude} />;
  }
  return <NoLocationInfo location={location} />;
};

export default WindPage;
