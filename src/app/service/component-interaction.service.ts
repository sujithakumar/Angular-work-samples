import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentInteractionService {

  public childAData = new BehaviorSubject<any>({
    "name": "",
    "password": "",
    "phone": ""
  });

  setChildAData(input:any){
    this.childAData.next(input)
  }
  getChildAData(){
    return this.childAData.asObservable();
  }

  public childBData = new BehaviorSubject<any>({
    "name": "",
    "password": "",
    "phone": ""
  });

  setChildBData(input:any){
    this.childBData.next(input)
  }
  getChildBData(){
    return this.childBData.asObservable();
  }

  constructor() { }


}
