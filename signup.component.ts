import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import{AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private afAuth:AngularFireAuth, private cldstore:AngularFirestore) { }
  UserData:Observable<any>;
email:string;
password:string;
Username:string;
  SignUp(email, password, Username) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        console.log(result);
        this.SetUserData(email,password,Username)
        
        //this.SendVerificationMail();
        //this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      });
      
    
  }
  SetUserData(email,password,Username){
    this.email = email;
    this.password = password;
    this.Username = Username;
var UserDatabase:AngularFirestoreCollection
UserDatabase = this.cldstore.collection('Userdata');
UserDatabase.doc('userdata').set({
  email:this.email,
  Username:this.Username,
  password:this.password
});
  }
  ngOnInit(): void {
  }

}

