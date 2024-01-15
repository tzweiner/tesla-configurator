import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SelectModelAndColorComponent } from './select-model-and-color/select-model-and-color.component';
import { SelectConfigAndOptionsComponent } from './select-config-and-options/select-config-and-options.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
  { path: 'models', component: SelectModelAndColorComponent },
  { path: 'options/:modelCode', component: SelectConfigAndOptionsComponent },
  { path: 'step3', component: SummaryComponent },
  { path: '**', redirectTo: 'models' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
