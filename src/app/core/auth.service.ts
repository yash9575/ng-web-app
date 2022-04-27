import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null
  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(data => this.authState = data)
  }


<<<<<<< HEAD
  get authenticated(): boolean {
    return this.authState !== null
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null
=======
  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
>>>>>>> 5cce5bdfbf76c9d29d147a3a1ae85322bdf597d2
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }
  logout() {
    this.afAuth.auth.signOut()
  }

}
