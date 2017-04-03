import{Routes,RouterModule} from "@angular/router";
import{LoginComponent} from "./login/login.component";
import{SignupComponent} from "./signup/signup.component";
import{HomeComponent} from "./home/home.component";
import{FriendsComponent} from "./friends/friends.component";
import{AddorderComponent} from "./addorder/addorder.component";
import{OrdersComponent} from "./orders/orders.component";
import{VieworderComponent} from "./vieworder/vieworder.component";
import{GroupsComponent} from "./groups/groups.component";
const APP_ROUTES: Routes=[

{path: 'login',component:LoginComponent},
{path: 'signup',component:SignupComponent}
,
{path: 'home',component:HomeComponent}
,
{path: 'friends',component:FriendsComponent}
,
{path: 'addorder',component:AddorderComponent}
,
{path: 'orders',component:OrdersComponent}
,
{path: 'vieworder',component:VieworderComponent},
{path: 'groups',component:GroupsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);