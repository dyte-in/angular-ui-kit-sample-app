import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DyteCustomElementsComponent } from './dyte-custom-elements/dyte-custom-elements.component';
import { DyteDefaultConfigComponent } from './dyte-default-config/dyte-default-config.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dyte-default-config', component: DyteDefaultConfigComponent },
  { path: 'dyte-custom-elements', component: DyteCustomElementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
