import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {HomeComponent} from './home/home.component';
import {AuthService} from './core/services/auth.service';
import {PlayComponent} from './play/play.component';


const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'play', component: PlayComponent, canActivate: [AuthService] },
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
