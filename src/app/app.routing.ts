import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { AddorderComponent } from './addorder/addorder.component';
import { OrdersComponent } from './orders/orders.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { GroupsComponent } from './groups/groups.component';
import { ViewnotificationComponent } from './viewnotification/viewnotification.component';
import { Guard } from './guard';
import { DirectComponent } from './groups/direct.component';

const APP_ROUTES: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent , canActivate: [Guard]},
    { path: 'friends', component: FriendsComponent, canActivate: [Guard] },
    { path: 'addorder', component: AddorderComponent , canActivate: [Guard]},
    { path: 'orders', component: OrdersComponent , canActivate: [Guard]},
    { path: 'vieworder', component: VieworderComponent, canActivate: [Guard] },
    { path: 'groups', component: GroupsComponent , canActivate: [Guard]},
    { path: 'direct', component: DirectComponent  , canActivate: [Guard]},
    { path: 'viewnotification', component: ViewnotificationComponent, canActivate: [Guard]}

];

export const routing = RouterModule.forRoot(APP_ROUTES);
