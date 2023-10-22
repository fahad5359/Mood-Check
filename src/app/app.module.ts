import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MoodCheckComponent } from './mood-check/mood-check.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgChartsModule} from "ng2-charts";
import {MoodService} from "./mood.service";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoodCheckComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    NgChartsModule


  ],
  providers: [MoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
