import { db } from "./firebase";

import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const collectionRef = collection(db, "users");
