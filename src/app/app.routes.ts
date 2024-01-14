import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {SelectModelAndColorComponent} from "./select-model-and-color/select-model-and-color.component";

export const routes: Routes = [
  { path: 'step1', component: SelectModelAndColorComponent},
  // { path: 'forecast/:zip/count/:count', component: RangeForecastComponent, resolve: { forecast: forecastResolver }},
  { path: '**', redirectTo: 'step1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
