import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { UserModel } from '@app/views/models/UserModel';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {

  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  signUpWithCustomAccount(userModel: UserModel) {
    return this.afAuth.auth.createUserWithEmailAndPassword(userModel.email, userModel.password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
