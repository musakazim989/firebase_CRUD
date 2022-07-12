import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBdCTOmuRZ_SQ6iw-NKu940sO-i6LHF6uo",
  authDomain: "mui-chat-cc329.firebaseapp.com",
  projectId: "mui-chat-cc329",
  storageBucket: "mui-chat-cc329.appspot.com",
  messagingSenderId: "772669591019",
  appId: "1:772669591019:web:f2c3460407841c6939ddae",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
