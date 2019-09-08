import { Component } from '@angular/core';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  subjectObj: string;
  developer: any = ['aaaa', 'bbbb', 'cccc', 'dddd'];

  constructor(public messageService: MessageService) { 
    this.messageService.createObservable().subscribe(data => {
      console.log(data);
      this.developer.push(data)
      })
  }
  
}