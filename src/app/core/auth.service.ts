import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth:AngularFireAuth ) { }

  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthprovider())
  }
  logout(){
    this.afAuth.auth.signOut()

  }
}
