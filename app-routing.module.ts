import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ItemMenuComponent } from './item-menu/item-menu.component';


const routes: Routes = [
  {path: 'contactus', component: ContactFormComponent},
  {path: '', component: HomePageComponent},
  {path: 'menu', component: ItemMenuComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
