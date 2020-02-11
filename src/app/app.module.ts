import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './core/services/auth.service';
import {PlayComponent} from './play/play.component';
import {HomeComponent} from './home/home.component';
import {GameService} from './core/services/game.service';
import {HangmanDrawComponent} from './play/ui/hangman-draw/hangman-draw.component';


@NgModule({
    declarations: [
        AppComponent, PlayComponent, HomeComponent, HangmanDrawComponent
    ],
    imports: [
        BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
    ],
    providers: [AuthService, GameService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
