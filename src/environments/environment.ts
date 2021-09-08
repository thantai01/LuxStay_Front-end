// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_SERVER: 'http://localhost:8081/api',
  PROVINCE_API: 'https://provinces.open-api.vn/api/',
  DISTRICT_API: 'https://provinces.open-api.vn/api/d',
  WARD_API: 'https://provinces.open-api.vn/api/',
  firebaseConfig : {
    apiKey: 'AIzaSyA8jceJvbwC7C_Oleph-oPOx9tRplJrCvs',
    authDomain: 'luxstay-cec68.firebaseapp.com',
    projectId: 'luxstay-cec68',
    storageBucket: 'luxstay-cec68.appspot.com',
    messagingSenderId: '135178254430',
    appId: '1:135178254430:web:91eae4b39200aaa0bd5ccf',
    measurementId: 'G-M8698HNEVF'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
