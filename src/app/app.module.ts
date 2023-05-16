import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LayoutModule} from "./layout/layout.module";
import {SharedModule} from "./shared/shared.module";
import {en_US, NZ_I18N} from "ng-zorro-antd/i18n";
import {HTTP_INTERCEPTORS_PROVIDER} from "./interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule
  ],
  providers: [
    {provide : NZ_I18N,useValue: en_US},
    HTTP_INTERCEPTORS_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
