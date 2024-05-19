export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getLocationLatLongList = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getLocationLatLong = async (locationName) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${locationName}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
