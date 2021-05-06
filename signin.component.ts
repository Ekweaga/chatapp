import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import{Router} from'@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private afth:AngularFireAuth, private router:Router) {
    this.afth.authState.subscribe(user => {
      if (user) {
        console.log(user);
;        //this.userData = user;
        //localStorage.setItem('user', JSON.stringify(this.userData));
       // JSON.parse(localStorage.getItem('user'));
      } //else {
        //localStorage.setItem('user', null);
        //JSON.parse(localStorage.getItem('user'));
     // }
    })
   }
   EmailSignIn(email,password){
    
      return this.afth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          console.log(result);
            this.router.navigate(['chatroom']);
          }).catch(error=>{
          alert(error.message);
          });
        }
          //this.SetUserData(result.user);
          
            AuthLogin(provider) {
              return this.afth.signInWithPopup(provider)
              .then((result) => {
                 console.log(result);
                //this.SetUserData(result.user);
              }).catch((error) => {
                window.alert(error)
              })
            }
   
        
        facebookAuth(){

        }
      //  GoogleAuth() {
        //  return this.AuthLogin(new auth.GoogleAuthProvider());
        //}
      
    
   

  ngOnInit(): void {
  }

}
