import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import{ Observable} from 'rxjs/Rx'
import{CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot}from '@angular/router';

@Injectable()
export class Guard implements CanActivate
{   constructor(private appservice : AppService){}
    canActivate(router : ActivatedRouteSnapshot,state:RouterStateSnapshot) : Observable<boolean>|boolean
    {
 return this.appservice.checkStatus()
    }


}