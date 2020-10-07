import { BridgeServiceService } from './bridge-service.service';
import { NameAComponent } from './Component A/NameA.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameBComponent } from './Component B/NameB.component';

@NgModule({
  declarations: [
    AppComponent,
    NameAComponent,
    NameBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BridgeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
