import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

const useLocation = () => {
    const [location, setLocation] = useState(null);

    const getLocation = async () => {
      try {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if(!granted) return;
        // console.log('before get')
        const lastKnownLocation = await Location.getLastKnownPositionAsync();
        // console.log('Last Known',lastKnownLocation)
        if(!lastKnownLocation) {
          return;
        }
  
        const { latitude, longitude } = lastKnownLocation.coords;
        setLocation({ latitude, longitude });
        // console.log('Location', location);
      } catch (error) {
          console.log(error)
      }
    } 

    useEffect(() => {
      getLocation();
    }, [])

    return location;
}

export default useLocation;