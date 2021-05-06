import { Component } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import {AngularFireAuth} from '@angular/fire/auth';
import{Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private afth:AngularFireAuth, private router:Router){}

  title = 'chatapp';
  remove(){
    document.getElementById('h1').style.display ='none';
  }
  SignOut() {
    this.afth.authState.subscribe(user => {
      if (user) {
        console.log(user);
        return this.afth.signOut().then(() => {
          localStorage.removeItem('user');
          this.router.navigate(['sign-in']);
        });
       //this.userData = user;
        //localStorage.setItem('user', JSON.stringify(this.userData));
       // JSON.parse(localStorage.getItem('user'));
       
    
   }
   
  
  });
}

}


