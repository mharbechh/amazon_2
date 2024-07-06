// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBjjxuBNtPxsdCXwsAvbjFgahW0TS4XJxU',
  authDomain: 'fir-e6364.firebaseapp.com',
  projectId: 'fir-e6364',
  storageBucket: 'fir-e6364.appspot.com',
  messagingSenderId: '844012173894',
  appId: '1:844012173894:web:7ec7c51deaf6f33b8ba847',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
