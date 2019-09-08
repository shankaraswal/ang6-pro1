import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MessageService {
  subjectObj = new Subject<any>();

  createObservable(){
    return this.subjectObj.asObservable();
  }
  
}