import LocationInfoComponent from "@/components/LocationInfoComponent";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLong } from "@/lib/location-info";

const LocationPage = async({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.latitude && resolved?.longitude) {
    return (
      <LocationInfoComponent lat={resolved.latitude} lon={resolved.longitude} />
    );
  }
  return <NoLocationInfo location={location} />; 
};

export default LocationPage;
