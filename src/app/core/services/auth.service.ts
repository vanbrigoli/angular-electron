import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {

  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
