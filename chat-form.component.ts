import { Component, OnInit } from '@angular/core';
import{AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Model } from '../model';
import { getLocaleTimeFormat } from '@angular/common';
@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  constructor(private cldstore:AngularFirestore) { }
items:AngularFirestoreCollection;
itemsdata$:Observable<any>;
data:Observable<any>;
userdata:AngularFirestoreCollection;
message:any;
datum:any;
  ngOnInit(): void {
  }
  usermesage=[];
  send(msg:any){
    this.items = this.cldstore.collection('/messages',ref=>{
      return ref.orderBy('time').limit(6);
    });
    this.userdata = this.cldstore.collection('/Userdata').doc('userdata');
    this.data = this.userdata.valueChanges();
    this.message = msg;
    this.datum = this.data.subscribe((data)=>{
    return (data.Username);
    })
   
    this.items.doc().set({
      message:this.message,
      time:new Date(),
      User: this.datum
     
    }).then(()=> alert("done")).catch((error)=>{
      return alert(error.message);
    });
    this.message="";
    this.itemsdata$ = this.items.valueChanges();
    console.log(this.itemsdata$);

    
  

    }
   
    
  
  //this.items= this.items.valueChanges()
  //console.log(this.itemsdata$);
   
   // console.log( this.items)

}
