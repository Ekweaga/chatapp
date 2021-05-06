import { Component, OnInit } from '@angular/core';
import{AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import{AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor(private cldstore:AngularFirestore, private afth:AngularFireAuth) {
    this.afth.authState.subscribe(auth=>{
      if(auth){
        console.log(auth);
        console.log(auth.uid);
      }
      
    })
      
    }
    items:AngularFirestoreCollection;
itemsdata$:Observable<any>;
ngOnInit() {

}
send(){
  this.items = this.cldstore.collection('/messages');
this.itemsdata$= this.items.valueChanges()
console.log(this.itemsdata$);
 
  console.log( this.cldstore.collection("/messages"));
}
   }

  
  



