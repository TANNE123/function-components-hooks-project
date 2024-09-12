import React, { useEffect, useState } from "react";

const useLatLogHook = () => {
  const [latitude1, setLatitude] = useState("");
  const [longitude1, setLongitude] = useState("");

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator?.geolocation) {
      navigator?.geolocation?.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      });
    }
    
  };

  return { latitude1, longitude1 };
};

export default useLatLogHook;
