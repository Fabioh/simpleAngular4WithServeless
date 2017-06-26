import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, URLSearchParams } from '@angular/http';

import { AppComponent } from './app.component';
import { IterationsService } from './iterations.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ HttpModule,
    BrowserModule
  ],
  providers: [ IterationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
