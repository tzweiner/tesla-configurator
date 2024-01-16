import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { SelectModelAndColorComponent } from './select-model-and-color/select-model-and-color.component';
import { BrowserModule } from '@angular/platform-browser';
import { SelectConfigAndOptionsComponent } from './select-config-and-options/select-config-and-options.component';
import { SummaryComponent } from './summary/summary.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayCarImageComponent } from './display-car-image/display-car-image.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectModelAndColorComponent,
    SelectConfigAndOptionsComponent,
    SummaryComponent,
    DisplayCarImageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [DataService],
})
export class AppModule {}
