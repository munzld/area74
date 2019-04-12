// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth0: {
    clientID: 'UIbBQbxzHlu4QAi87QVqdnYG6CJyvHXr',
    serverUrl: 'http://localhost:4200'
  },
  firebase: {
    apiKey: 'AIzaSyAQpBDRrM7oWqp3SxJ_RoQpsGkWmQKFchg',
    authDomain: 'area-74.firebaseapp.com',
    databaseURL: 'https://area-74.firebaseio.com',
    projectId: 'area-74',
    storageBucket: 'area-74.appspot.com',
    messagingSenderId: '134362539190'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
