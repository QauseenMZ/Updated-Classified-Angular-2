import { initializeApp, database } from 'firebase';

export const fireConfig = {
    apiKey: "AIzaSyCnz8TxFRVkdiO7y89kv5NdeVtRNd2G4BM",
    authDomain: "fir-auth-a24bd.firebaseapp.com",
    databaseURL: "https://fir-auth-a24bd.firebaseio.com",
    storageBucket: "fir-auth-a24bd.appspot.com",
    messagingSenderId: "1057406814794"
  };
 firebase.initializeApp(fireConfig);