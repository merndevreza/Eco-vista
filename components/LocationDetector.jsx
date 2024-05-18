"use client";

import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [pathname,searchParams]);

  return (
    <div className="flex w-full justify-center items-center h-screen">
      {loading && (
        <div className="w-[500px]">
          <Image
            className="mx-auto"
            src="/loading-location.gif"
            alt="Detecting Location"
            width={200}
            height={200}
          />
          <h3 className="text-4xl text-black  text-center">
            Detecting Location...
          </h3>
        </div>
      )}
    </div>
  );
};

export default LocationDetector;
