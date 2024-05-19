import Link from "next/link";

const NoLocationInfo = ({location}) => {
  return (
    <div className="card">
      <h6 className="feature-name">No Location Info found for {location}</h6>
      <Link className="px-2 py-1 bg-green-400 rounded inline-block" href={"/"}>My Location</Link>
    </div>
  );
};

export default NoLocationInfo;
