// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GOOGLE_CLIENT_ID:'973867362107-90ql9nvkimj38isk1i5av01gj8lt3qjj.apps.googleusercontent.com',
  API_ENDPOINT: 'http://localhost:8000/',
  GOOGLE_OAUTH_REDIRECT_URL: 'http://localhost:7000/oauth/google'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
