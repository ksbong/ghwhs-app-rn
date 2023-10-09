import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyC50qP77GkO_essvPr3JvrlBgbiMfA6JPA',
  authDomain: 'hwandong-1cdba.firebaseapp.com',
  databaseURL: 'https://hwandong-1cdba-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'hwandong-1cdba',
  storageBucket: 'hwandong-1cdba.appspot.com',
  messagingSenderId: '339787259398',
  appId: '1:339787259398:web:47965c75418e438e266d87',
  measurementId: 'G-7CKH33NBLD',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);