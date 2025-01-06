import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { ProcessingComponent } from './processing/processing.component';
import { SellingToComponent } from './selling-to/selling-to.component';
import { BuyingFromComponent } from './buying-from/buying-from.component';
import { SystemAltIdComponent } from './system-alt-id/system-alt-id.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    ProcessingComponent,
    SellingToComponent,
    BuyingFromComponent,
    SystemAltIdComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgxPrintModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
