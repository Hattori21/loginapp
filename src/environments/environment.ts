// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
  	apiKey: "AIzaSyAG50ljBYGCSOOrNq-i692FwBIjPiXSDdw",
    authDomain: "loginapp-3ac19.firebaseapp.com",
    databaseURL: "https://loginapp-3ac19.firebaseio.com",
    projectId: "loginapp-3ac19",
    storageBucket: "loginapp-3ac19.appspot.com",
    messagingSenderId: "919267921284"
  }
};
