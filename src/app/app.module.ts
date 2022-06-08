import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DyteComponentsModule } from '@dytesdk/angular-ui-kit';
import { DyteCustomConfigComponent } from './dyte-custom-config/dyte-custom-config.component';
import { DyteCustomElementsComponent } from './dyte-custom-elements/dyte-custom-elements.component';
import { DyteDefaultConfigComponent } from './dyte-default-config/dyte-default-config.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    DyteCustomConfigComponent,
    DyteCustomElementsComponent,
    DyteDefaultConfigComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DyteComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
