import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-sub-vs-obs',
  templateUrl: './sub-vs-obs.component.html',
  styleUrls: ['./sub-vs-obs.component.css']
})
export class SubVsObsComponent implements OnInit {
  subject = new BehaviorSubject<number>(0);
  observable = Observable.create((observer) => {
    observer.next(Math.random());
  });
  SubResult = [];
  obsRes = [];
  subjectAsObs=[];
  constructor() { }

  ngOnInit(): void {

    this.subject.next(Math.random());
  }

  callSubject() {
    this.subject.subscribe((data) => {
      this.SubResult.push(data);
    });

  }

  callObservable() {
    this.observable.subscribe((data) => {
      this.obsRes.push(data);
    });
  }

  subAsObs(){
    this.subject.next(Math.random());
    this.subject.asObservable().subscribe(value => {
      this.subjectAsObs.push(value);
    });
    
  }

}
