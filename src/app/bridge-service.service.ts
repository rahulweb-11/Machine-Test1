import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BridgeServiceService {
  counter: number = 0;


  constructor() { }
  
  increment(){
    this.counter++;
  }
}
