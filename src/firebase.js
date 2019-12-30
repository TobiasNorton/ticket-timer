import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC0X6n1c3RZeTtc8Bcc5vjsfNiRUhaxohI',
  authDomain: 'ticket-timer-94471.firebaseapp.com',
  databaseURL: 'https://ticket-timer-94471.firebaseio.com',
  projectId: 'ticket-timer-94471',
  storageBucket: 'ticket-timer-94471.appspot.com',
  messagingSenderId: '182358776396',
  appId: '1:182358776396:web:cd44f7e57ea89df7b7b2e9'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
