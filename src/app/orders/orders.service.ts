import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

@Injectable()
export class OrdersService {
  headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('x_access_token', localStorage.getItem('token'));
  }
  getorders() {
    return this.http.get('http://127.0.0.1:8090/orders/allorders', { headers: this.headers })
      .map((response: Response) => response.json());
  }
   getlatestorders() {
    return this.http.get('http://127.0.0.1:8090/orders/latestorders', { headers: this.headers })
      .map((response: Response) => response.json());
  }

  finishorder(order: any) {
    var obj = { id: order }
    const body = JSON.stringify(obj);

    return this.http.post('http://127.0.0.1:8090/orders/checkout', body, { headers: this.headers })
      .map((response: Response) => response.json());
  }

  cancelorder(id: any) {
    // const body =;
    var obj = { id: id }
    const body = JSON.stringify(obj);
    return this.http.delete('http://127.0.0.1:8090/orders/cancel', new RequestOptions({
      headers: this.headers,
      body: JSON.stringify(obj)
    }))
      .map((response: Response) => { response.json() })
  }
  addorder(order: any) {

    const body = JSON.stringify(order);
    console.log(body)
    return this.http.post('http://127.0.0.1:8090/orders/add', body, { headers: this.headers })
      .map((response: Response) => response.json())
  }
  addmeal(meal) {
    const body = JSON.stringify(meal);
    return this.http.post('http://127.0.0.1:8090/orders/addmeal', body, { headers: this.headers })
      .map((response: Response) => response.json());
  }



  deletemeal(id: any) {
    // const body =;

    // const body =JSON.stringify(obj);
    return this.http.delete('http://127.0.0.1:8090/orders/removemeal', new RequestOptions({
      headers: this.headers,
      body: JSON.stringify(id)
    }))
      .map((response: Response) => { response.json() })
  }

  getorderbyid(id: any) {
    var obj = { id: id }
    const body = JSON.stringify(obj);
    return this.http.post('http://127.0.0.1:8090/orders/getorderbyid', body, { headers: this.headers })
      .map((response: Response) => response.json());

  }
   joinorder(id: any) {
    var obj = { id: id }
    const body = JSON.stringify(obj);
    return this.http.post('http://127.0.0.1:8090/orders/join', body, { headers: this.headers })
      .map((response: Response) => response.json());

  }
 checkinvited(id: any) {
   
    const body = JSON.stringify(id);
    return this.http.post('http://127.0.0.1:8090/orders/checkinvited', body, { headers: this.headers })
      .map((response: Response) => response.json());

  }
}


