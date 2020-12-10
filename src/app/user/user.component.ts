import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() u: User;
  @Output() notification = new EventEmitter< User>();
  constructor() { }

  ngOnInit(): void {
  }
  sendNotif(){
    this.notification.emit(this.u);
  }
}
