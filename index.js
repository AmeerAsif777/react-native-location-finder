import { hasPermissionForIOS} from './ios.js';
import { hasPermissionForAndroid } from './android.js';
// const hasPermissionForIOS = require('./ios.js');
// const hasPermissionForAndroid = require('./android.js');
import axios from 'axios';
import { countryContinent } from './constants.js';

const getLocation = async (params) =>
{
    const { Platform, GoogleApiKey, Geolocation, PermissionsAndroid } = params;
    let locationPermission;
  if (Platform.OS === 'android') locationPermission = await hasPermissionForAndroid({ Platform, PermissionsAndroid });
    else locationPermission = await hasPermissionForIOS();
    if (!locationPermission) return;
    
    const success = async (position) => {
      try {
        const key = GoogleApiKey;
        const LAT = position?.coords.latitude || 20.5937 ; // Default value 
        const LNG = position?.coords.longitude || 78.9629; // Default value
        const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${ LAT },${ LNG }&key=${key}`);
        let { short_name } = resp.data.results[0].address_components.find(
          (obj) => obj.types.length && obj.types[0] === 'country' && obj.types[1] === 'political'
        );
          return countryContinent[short_name];
      } catch (err) {
          console.log('!!!!!!!!!!!!!!!!', error);
      }
    };

  success();
  const error = (error) =>
  {
    console.log('***************************** ERROR *****************************', error);
    /*if (Platform.OS === 'android') ToastAndroid.show(error, ToastAndroid.LONG);
    else AlertIOS.alert(error);
    */
  };

  Geolocation.getCurrentPosition(success, error, {
    accuracy: {
      android: 'high',
      ios: 'best',
    },
    enableHighAccuracy: true,
    timeout: 30000,
    maximumAge: 10000,
    distanceFilter: 0,
    forceRequestLocation: true,
    forceLocationManager: false,
    showLocationDialog: true,
  });

  };

const locationFinder = (params) =>
{
    getLocation(params);
}
export { locationFinder };
