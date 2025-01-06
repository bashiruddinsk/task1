import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ProcessingComponent } from './processing/processing.component';
import { SellingToComponent } from './selling-to/selling-to.component';
import { BuyingFromComponent } from './buying-from/buying-from.component';
import { SystemAltIdComponent } from './system-alt-id/system-alt-id.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,children:[
  {path:'basic',component:BasicComponent},
  {path:'processing',component:ProcessingComponent},
  {path:'selling-to',component:SellingToComponent},
  {path:'buying-from',component:BuyingFromComponent},
  {path:'system-alt-id',component:SystemAltIdComponent}],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
