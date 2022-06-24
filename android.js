export const hasPermissionForAndroid = async (params) =>
{
  const { Platform, PermissionsAndroid } = params;
  if (Platform.Version < 23) {
      return true;
    }

    /*const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

    if (hasPermission) {
      return true;
    }
*/
    const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
  if (status === PermissionsAndroid.RESULTS.GRANTED) {
    console.log('ANDROID GRANTED STATUS');
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      // ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      // ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }
    return false;
};
  