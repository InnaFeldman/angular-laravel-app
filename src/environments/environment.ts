// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  type: 'local',
  titleName:'(Local) Angular-Laravel',
  baseApi: 'http://localhost/angular-laravel-app/server/public/api',
  base: 'http://localhost/angular-laravel-app/server/public/',
  canvas: {
    redirect_uri: 'http://localhost:4200/canvas',
    client_id: '157510000000000113',
    canvas_url: 'https://digitalskills.test.instructure.com/'
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
