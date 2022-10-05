import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBY22K5XVxSCZNPehCr668BjS2alDwspKA',

  authDomain: 'finance-planner-d4448.firebaseapp.com',

  projectId: 'finance-planner-d4448',

  storageBucket: 'finance-planner-d4448.appspot.com',

  messagingSenderId: '1027748189534',

  appId: '1:1027748189534:web:68a2f3a4d3c6f73e622bcf',
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
export { projectFirestore, projectAuth };
