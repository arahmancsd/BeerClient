// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /*I understand sharing key without product is risky, however, I am sharing it only for the purpose of this coding quiz and allow
  you to use this key to access beer service.
  */
  apiKey: 'bc9861efa21bbc5715bc62bd9c22cb70',
  searchTerm: 'searchTerm',
  searchCategory: 'searchCategory',
  dummyImageLink: 'https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-medium.png',
  dummyText: 'dummy',
  dummyLargeImageLink : 'https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-large.png',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
