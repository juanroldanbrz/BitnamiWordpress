import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { InstanceManagerComponent } from './instance-manager/instance-manager.component';
import { CredentialsManagerComponent } from './credentials-manager/credentials-manager.component';
import {RouterModule, Routes} from "@angular/router";
import { NewInstanceComponent } from './new-instance/new-instance.component';
import {ServerService} from "./server.service";

const appRoutes: Routes = [
  { path: 'instance', component: InstanceManagerComponent },
  { path: 'new', component: NewInstanceComponent },
  { path: 'settings',      component: CredentialsManagerComponent },
  { path: '**',
    redirectTo: '/instance',
    pathMatch: 'full'
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    InstanceManagerComponent,
    CredentialsManagerComponent,
    NewInstanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
