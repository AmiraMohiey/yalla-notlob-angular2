import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class FriendsService {

  constructor(private http: Http) { }
  getFriends() {
    return this.http.get('https://notlob-2eee7.firebaseio.com/friends.json')
      .map((response: Response) => response.json());
  }

  addFriend(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://notlob-2eee7.firebaseio.com/friends.json', body, {headers: headers});
  }
}
