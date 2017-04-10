import { Component, OnInit,OnChanges } from '@angular/core';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';
import { OrdersService } from '../orders/orders.service';
import { AppService } from '../app.service';


@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})

export class VieworderComponent implements OnInit ,OnChanges{
  me={}
order
joinedfriends
meals
invitedfriends
addmeal={orderid:"",comment:"",amount:"",price:"",item:"",person:""}
  constructor(private route: ActivatedRoute, private ordersservice: OrdersService,private appService: AppService,private router:Router) {
             this.route.queryParams.subscribe(params => {
             this.order = JSON.parse(params["order"]);
             this.invitedfriends=this.order.invitedfriends;
             this.joinedfriends=this.order.joined;
             this.meals=this.order.meals;
             this.addmeal.orderid=this.order.id;
          });
           console.log("order",this.order)
         this.me = this.appService.me['_id'];
        //console.log(this.me)
  }
ngOnChanges() {
    this.me = this.appService.me;
   
  }

addorder(){
  if(this.addmeal.item&&this.addmeal.amount&&this.addmeal.price){
console.log(this.addmeal)
  this.ordersservice.addmeal(this.addmeal).subscribe(
      data => {
                  this.update()
      })
  }


}
deletemeal(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var meal_id = idAttr.nodeValue;
   console.log("m",meal_id)
   var meal={id:meal_id,orderid:this.order.id} 
 this.ordersservice.deletemeal(meal).subscribe(
      data => { this.update()})

}
statuscheck(){

  if (this.order.status=="waiting")
  {  return true
    }
    return false
}
  ngOnInit() {
    
  }
  update(){   this.ordersservice.getorderbyid(this.order.id).subscribe(
                        data2 => {  console.log("updaa",data2)
                              let navigationExtras: NavigationExtras = {
                              queryParams: {
                               
                                "order": JSON.stringify(data2)
                        
                              }
                            }
                   
                    this.router.navigate(["vieworder"], navigationExtras);
                this.addmeal={orderid:"",comment:"",amount:"",price:"",item:"",person:""}
                      })
       }
  

}
