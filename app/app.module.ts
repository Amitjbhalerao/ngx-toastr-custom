import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CustomToastComponent } from './custom-toast/custom-toast.component';
import {ClarityModule} from '@clr/angular';

@NgModule({
  imports: [
    ClarityModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      toastComponent: CustomToastComponent,
      closeButton: true,
      positionClass: 'toast-top-right',
      newestOnTop: false, // added custom toast!
    }), // ToastrModule added 
  ],
  declarations: [AppComponent, HelloComponent, CustomToastComponent],
  entryComponents: [CustomToastComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
