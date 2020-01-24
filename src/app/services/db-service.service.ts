import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private firestore: AngularFirestore) { }

  getPlans() {
    return this.firestore.collection('gokiplans').snapshotChanges();
  }
}
