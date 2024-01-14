import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routes";
import {AppComponent} from "./app.component";
import {SelectModelAndColorComponent} from "./select-model-and-color/select-model-and-color.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent, SelectModelAndColorComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, AppRoutingModule, BrowserModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
