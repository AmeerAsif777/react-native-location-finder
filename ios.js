import Geolocation from 'react-native-geolocation-service';

  export const hasPermissionForIOS = async () => {
    let response;
    response = await Geolocation.requestAuthorization('always');
    if (response === 'granted') return true;
    else AlertIOS.alert(`Location ${response} by user.`);
  };
// module.exports = { hasPermissionForIOS };