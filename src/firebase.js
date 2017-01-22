import Firebase from 'firebase';
console.log(process.env);
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    /*storageBucket: "",
    messagingSenderId: ""*/
};
const app = Firebase.initializeApp(config);
console.log(app);

export default Firebase;
export {
    app
};