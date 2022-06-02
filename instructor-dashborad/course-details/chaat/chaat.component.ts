import { Component, OnInit } from '@angular/core';
import { User } from './../../../signalr.service';
import * as $ from 'jquery';
import { SignalrService } from '../../../signalr.service';
@Component({
  selector: 'app-chaat',
  templateUrl: './chaat.component.html',
  styleUrls: ['./chaat.component.css']
})
export class ChaatComponent implements OnInit {

  constructor( public signalrService: SignalrService) { }
  public users: Array<User> = new Array<User>();

  ngOnInit(): void {
    $('#action_menu_btn').click(function(){
      $('.action_menu').toggle();}
 ); 
 this.getOnlineUsersLis();
 this.getOnlineUsersInv();
 this.signalrService.ssSubj.subscribe((obj: any) => {
  if (obj.type == "HubConnStarted") {
    this.getOnlineUsersInv();
  }
});
  }
  getOnlineUsersInv(): void {
    this.signalrService.hubConnection.invoke("getOnlineUsers")
    .catch(err => console.error(err));
  }
  getOnlineUsersLis(): void {
   // debugger
    this.signalrService.hubConnection.on("getOnlineUsersResponse", (onlineUsers: Array<User>) => {
      this.users = [...onlineUsers];
     // debugger
      console.log(this.users)
    });
  }

}
