# react-native-location-finder

<br />

## In this library, we can easily get the information of current location by just passing four parameters.
First,   

> <font color=yellow> In the version of `0.0.2`,  this package depends on two other libraries, which are `react-native` and `react-native-geolocation-service`.</font>

```js
import { PermissionsAndroid, Platform,} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

```

## How to implement
### Step 1
 Add following lines inside `/android/app/src/main/AndroidManifest.xml`
 ```xml
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
  ```
### Step 2
Add following command in `/android/build.gradle`
```gradle
buildscript {
    ext {
        compileSdkVersion = 30
        targetSdkVersion = 30
         // Other dependencies
        googlePlayServicesVersion = "17.0.0" // ---- ADD THIS LINE
    }
    repositories {
        google()
       // Other dependencies
    }
}

```
### Step 3
If the location permission is granted, then don't waste your time by reading the next sentence. <br /> If not, we have to manually go to Application setting and allow the location permission. <font color=red>I know, its weird. </font> <font color=blue>In the next version, we will rectify this. </font>
## Cheers!!!

> <font color=green> 
You are awesome. Now time to use our `react-native-location-finder` library inside your project.
 </font>
```js
import { PermissionsAndroid, Platform,} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import { locationFinder } from 'react-native-location-finder';

let params = {
    Geolocation: Geolocation,
    Platform: Platform,
    PermissionsAndroid: Platform.OS === 'android' ? PermissionsAndroid : '',
    GoogleApiKey: 'your Google API KEY',
  };

const country = locationFinder(params);

```

## Explanation

 `locationFinder()` is a function that can call inside any blocks like `useEffect`, `async and await` and so on.
 Please visit this [link](https://developers.google.com/maps/documentation/geolocation/get-api-key)  to get the google API key.
 <br />
 <br />

# Upcoming
> <font color=white> 
* `locationFinder()` function will return current location's latitude, longitude, Continent, Country, City, Street Address.
* Will write scripting file for automatic add neccessary lines or commands inside the native folder(Android and ios).
* Not depends on `react-native-geolocation-service`.
* Not depends on `react-native`.
 </font>
* Promoting Location permission pop-up window.
