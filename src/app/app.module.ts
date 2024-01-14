import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routes";
import {AppComponent} from "./app.component";
import {SelectModelAndColorComponent} from "./select-model-and-color/select-model-and-color.component";
import {BrowserModule} from "@angular/platform-browser";
import { SelectConfigAndOptionsComponent } from './select-config-and-options/select-config-and-options.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [AppComponent, SelectModelAndColorComponent, SelectConfigAndOptionsComponent, SummaryComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, AppRoutingModule, BrowserModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
