import { hasPermissionForIOS} from './ios.js';
import { hasPermissionForAndroid } from './android.js';
// const hasPermissionForIOS = require('./ios.js');
// const hasPermissionForAndroid = require('./android.js');
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import { countryContinent } from './constants.js';

const getLocation = async (params) =>
{
    const { OSInformation, GoogleApiKey } = params;
    let locationPermission;
    if (OSInformation.type === 'Android') locationPermission = await hasPermissionForAndroid(OSInformation);
    else locationPermission = await hasPermissionForIOS();
    if (!locationPermission) return;
    
    const success = async (position) => {
      try {
        console.log('COMING');
        const key = GoogleApiKey;
        const LAT = position?.coords.latitude || 20.5937 ; // Testing 
        const LNG = position?.coords.longitude || 78.9629; // Testing
        const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${ LAT },${ LNG }&key=${key}`);
        let { short_name } = resp.data.results[0].address_components.find(
          (obj) => obj.types.length && obj.types[0] === 'country' && obj.types[1] === 'political'
        );
          console.log('LOCATION', countryContinent[short_name]);
          return countryContinent[short_name];
      } catch (err) {
          console.log('!!!!!!!!!!!!!!!!', error);
      }
      console.log('OKAY BYE');
    };

    success();
  };

const logic = (params) =>
{
    getLocation(params);
}
export { logic };
