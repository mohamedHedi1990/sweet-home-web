import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  
    {path:'location', loadChildren: () => import('../app/location/location.module').then(m => m.LocationModule )},  
   
  
    { path: '', redirectTo: 'location', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
