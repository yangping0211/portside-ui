import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { SessionService } from "./session.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MdButtonModule, MdInputModule, MdCheckboxModule } from "@angular/material";
import { HttpModule } from "@angular/http";

@NgModule({
	declarations: [
		AppComponent,
		SessionsComponent,
		ProfileComponent,
		ThanksComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MdButtonModule,
		MdInputModule,
		MdCheckboxModule
	],
	providers: [
		SessionService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
