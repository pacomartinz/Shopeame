import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProdsPageComponent } from './pages/prods-page/prods-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "prods", component: ProdsPageComponent
  },
  {
    path: "gestion",component: GestionPageComponent
  }
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
