// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiBaseUrl: 'http://api.weatherapi.com/v1',
  key: '2cf52b58b2a6482085b171923201207',
  periodsDay: [
    { name: "dawn", hour: "03"},
    { name: "morning", hour: "09"},
    { name: "afternoon", hour: "15"},
    { name: "night", hour: "21"},
  ],
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
