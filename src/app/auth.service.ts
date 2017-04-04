import { User } from "./user.interface";
import { Injectable } from "@angular/core"
 @Injectable()
export class AuthService {
  
i=1;
   

    signupUser(user: User) {
        console.log(user);
    }
    signin(user: User) {

console.log (user.email)
                    
         }    
    isAuthenticated() {

var bool=true
setTimeout(function(){ bool=!bool }, 3000);
      return bool;
    }

    // logout() {


    // }

}