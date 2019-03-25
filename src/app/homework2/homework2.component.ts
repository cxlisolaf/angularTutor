import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
  // select: '[app-server]',
  selector: 'app-homework2',
  templateUrl: './homework2.component.html', // you can put real html here
  styleUrls: ['./homework2.component.css']
})
export class Homework2Component {
    serverId = 10;
    serverStatus = 'offLine';
    counter = 0;
    isLogin = false;
    userName: string;
    students: Student[] = [new Student('Bill Gates', 'Computer Science'),
                           new Student('Steve Jobs', 'Computer Science'),
                           new Student('Elon Musk', 'Computer Science')];

    getServerStatus() {
      return this.serverStatus;
    }

    counterPlus() {
     this.counter ++;
    }

    resetCounter() {
      this.counter = 0;
    }

    login() {
      this.isLogin = true;
    }

    signOut() {
      this.isLogin = false;
    }

    // Event Binding
    onUpdateUserName(event: Event) {
      this.userName = (<HTMLInputElement>event.target).value;
    }
}
