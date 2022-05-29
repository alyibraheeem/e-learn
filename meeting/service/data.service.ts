import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../types/message';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';


 export const WS_ENDPOINT = environment.wsEndpoint;
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private socket$!: WebSocketSubject<any> ;

  private messagesSubject = new Subject<Message>();
  public messages$ = this.messagesSubject.asObservable();
  constructor() { }
  public connect(): void {

    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket();

      this.socket$.subscribe(
        // Called whenever there is a message from the server
        msg => {
          console.log('Received message of type: ' + msg.type);
          this.messagesSubject.next(msg);
          console.log('waiting');
        }
      );
    }
  }
  sendMessage(msg: Message): void {
    console.log('sending message: ' + msg.type);
    this.socket$.next(msg);
  }
  private getNewWebSocket(): WebSocketSubject<any> {

    return webSocket({

      url: WS_ENDPOINT,
      openObserver: {
        next: () => {
          console.log('[DataService]: connection ok');

        }
      },

      closeObserver: {
        next: () => {
          console.log('[DataService]: connection closed');

          this.connect();
        }
      }
    });

  }
}
