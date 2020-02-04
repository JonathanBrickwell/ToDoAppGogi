import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Plans } from '../models/plans';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  private plans: Observable<Plans[]>;
  private plansCollection: AngularFirestoreCollection<Plans>;

  constructor(private firestore: AngularFirestore) {
    this.setPlansData();
   }

  setPlansData() {
    this.plansCollection = this.firestore.collection<Plans>('gokiplans');
    this.plans = this.plansCollection.snapshotChanges().pipe(
      map(result => {
        return result.map(data => {
          const plansData = data.payload.doc.data();
          const id = data.payload.doc.id;
          return {id, ...plansData};
        });
      })
    );
  }

  getPlansData() {
    return this.plans;
  }

  createNewPlan(newPlan) {
    return this.firestore.collection('gokiplans').add(newPlan);
  }

  deleteThePlan(id) {
    return this.plansCollection.doc(id).delete();
  }
}
