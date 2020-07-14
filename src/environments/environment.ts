// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiBaseUrl: 'http://api.weatherapi.com/v1',
  key: '2cf52b58b2a6482085b171923201207',
  periodsDay: [
    { name: "dawn", hour: "03" },
    { name: "morning", hour: "09" },
    { name: "afternoon", hour: "15" },
    { name: "night", hour: "21" },
  ], 
  weatherCondition: [
    {
      code: 1000,
      day: "Sunny",
      night: "Clear",
      icon: 113,
      class: "sunnyModo"
    },
    {
      code: 1003,
      day: "Cloudy",
      night: "Cloudy",
      icon: 116,
      class: "sunnyModo"
    },
    {
      code: 1006,
      day: "Cloudy",
      night: "Cloudy",
      icon: 119,
      class: "sunnyModo"
    },
    {
      code: 1009,
      day: "Overcast",
      night: "Overcast",
      icon: 122,
      class: "sunnyModo"
    },
    {
      code: 1030,
      day: "Mist",
      night: "Mist",
      icon: 143,
      class: "sunnyModo"
    },
    {
      code: 1063,
      day: "Patchy rain possible",
      night: "Patchy rain possible",
      icon: 176,
      class: "rainyModo"
    },
    {
      code: 1066,
      day: "Patchy snow possible",
      night: "Patchy snow possible",
      icon: 179,
      class: "snowyModo"
    },
    {
      code: 1069,
      day: "Patchy sleet possible",
      night: "Patchy sleet possible",
      icon: 182,
      class: "snowyModo"
    },
    {
      code: 1072,
      day: "Patchy freezing drizzle possible",
      night: "Patchy freezing drizzle possible",
      icon: 185,
      class: "rainyModo"
    },
    {
      code: 1087,
      day: "Thundery outbreaks possible",
      night: "Thundery outbreaks possible",
      icon: 200,
      class: "rainyModo"
    },
    {
      code: 1114,
      day: "Blowing snow",
      night: "Blowing snow",
      icon: 227,
      class: "snowyModo",
    },
    {
      code: 1117,
      day: "Blizzard",
      night: "Blizzard",
      icon: 230,
      class: "snowyModo",
    },
    {
      code: 1135,
      day: "Fog",
      night: "Fog",
      icon: 248,
      class: "snowyModo",
    },
    {
      code: 1147,
      day: "Freezing fog",
      night: "Freezing fog",
      icon: 260,
      class: "snowyModo",
    },
    {
      code: 1150,
      day: "Patchy light drizzle",
      night: "Patchy light drizzle",
      icon: 263,
      class: "rainyModo"
    },
    {
      code: 1153,
      day: "Light drizzle",
      night: "Light drizzle",
      icon: 266,
      class: "rainyModo"
    },
    {
      code: 1168,
      day: "Freezing drizzle",
      night: "Freezing drizzle",
      icon: 281,
      class: "rainyModo"
    },
    {
      code: 1171,
      day: "Heavy freezing drizzle",
      night: "Heavy freezing drizzle",
      icon: 284,
      class: "rainyModo"
    },
    {
      code: 1180,
      day: "Patchy light rain",
      night: "Patchy light rain",
      icon: 293,
      class: "rainyModo"
    },
    {
      code: 1183,
      day: "Light rain",
      night: "Light rain",
      icon: 296,
      class: "rainyModo"
    },
    {
      code: 1186,
      day: "Moderate rain at times",
      night: "Moderate rain at times",
      icon: 299,
      class: "rainyModo"
    },
    {
      code: 1189,
      day: "Moderate rain",
      night: "Moderate rain",
      icon: 302,
      class: "rainyModo"
    },
    {
      code: 1192,
      day: "Heavy rain at times",
      night: "Heavy rain at times",
      icon: 305,
      class: "rainyModo"
    },
    {
      code: 1195,
      day: "Heavy rain",
      night: "Heavy rain",
      icon: 308,
      class: "rainyModo"
    },
    {
      code: 1198,
      day: "Light freezing rain",
      night: "Light freezing rain",
      icon: 311,
      class: "rainyModo"
    },
    {
      code: 1201,
      day: "Moderate or heavy freezing rain",
      night: "Moderate or heavy freezing rain",
      icon: 314,
      class: "rainyModo"
    },
    {
      code: 1204,
      day: "Light sleet",
      night: "Light sleet",
      icon: 317,
      class: "snowyModo",
    },
    {
      code: 1207,
      day: "Moderate or heavy sleet",
      night: "Moderate or heavy sleet",
      icon: 320,
      class: "snowyModo",
    },
    {
      code: 1210,
      day: "Patchy light snow",
      night: "Patchy light snow",
      icon: 323,
      class: "snowyModo",
    },
    {
      code: 1213,
      day: "Light snow",
      night: "Light snow",
      icon: 326,
      class: "snowyModo",
    },
    {
      code: 1216,
      day: "Patchy moderate snow",
      night: "Patchy moderate snow",
      icon: 329,
      class: "snowyModo",
    },
    {
      code: 1219,
      day: "Moderate snow",
      night: "Moderate snow",
      icon: 332,
      class: "snowyModo",
    },
    {
      code: 1222,
      day: "Patchy heavy snow",
      night: "Patchy heavy snow",
      icon: 335,
      class: "snowyModo",
    },
    {
      code: 1225,
      day: "Heavy snow",
      night: "Heavy snow",
      icon: 338,
      class: "snowyModo",
    },
    {
      code: 1237,
      day: "Ice pellets",
      night: "Ice pellets",
      icon: 350,
      class: "snowyModo",
    },
    {
      code: 1240,
      day: "Light rain shower",
      night: "Light rain shower",
      icon: 353,
      class: "snowyModo",
    },
    {
      code: 1243,
      day: "Moderate or heavy rain shower",
      night: "Moderate or heavy rain shower",
      icon: 356,
      class: "snowyModo",
    },
    {
      code: 1246,
      day: "Torrential rain shower",
      night: "Torrential rain shower",
      icon: 359,
      class: "snowyModo",
    },
    {
      code: 1249,
      day: "Light sleet showers",
      night: "Light sleet showers",
      icon: 362,
      class: "snowyModo",
    },
    {
      code: 1252,
      day: "Moderate or heavy sleet showers",
      night: "Moderate or heavy sleet showers",
      icon: 365,
      class: "snowyModo",
    },
    {
      code: 1255,
      day: "Light snow showers",
      night: "Light snow showers",
      icon: 368,
      class: "snowyModo",
    },
    {
      code: 1258,
      day: "Moderate or heavy snow showers",
      night: "Moderate or heavy snow showers",
      icon: 371,
      class: "snowyModo",
    },
    {
      code: 1261,
      day: "Light showers of ice pellets",
      night: "Light showers of ice pellets",
      icon: 374,
      class: "snowyModo",
    },
    {
      code: 1264,
      day: "Moderate or heavy showers of ice pellets",
      night: "Moderate or heavy showers of ice pellets",
      icon: 377,
      class: "snowyModo",
    },
    {
      code: 1273,
      day: "Patchy light rain with thunder",
      night: "Patchy light rain with thunder",
      icon: 386,
      class: "rainyModo"
    },
    {
      code: 1276,
      day: "Moderate or heavy rain with thunder",
      night: "Moderate or heavy rain with thunder",
      icon: 389,
      class: "rainyModo"
    },
    {
      code: 1279,
      day: "Patchy light snow with thunder",
      night: "Patchy light snow with thunder",
      icon: 392,
      class: "rainyModo"
    },
    {
      code: 1282,
      day: "Moderate or heavy snow with thunder",
      night: "Moderate or heavy snow with thunder",
      icon: 395,
      class: "snowyModo",
    }
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
