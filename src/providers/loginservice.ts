import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Loginservice {

	username: string = "";
	name: string = "";
	lastname: string = "";
	
  constructor(public http: Http) {
    
  }

  getUsername(){
  	return this.username;
  }

  getName(){
  	return this.name;
  }

  getLastname(){
  	return this.lastname;
  }

  setUsername(username){
  	this.username = username;
  }

  setName(name){
  	this.name = name;
  }

  setLastname(lastname){
  	this.lastname = lastname;
  }

}
