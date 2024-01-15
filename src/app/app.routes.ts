import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SelectModelAndColorComponent } from './select-model-and-color/select-model-and-color.component';
import { SelectConfigAndOptionsComponent } from './select-config-and-options/select-config-and-options.component';
import { SummaryComponent } from './summary/summary.component';
import { canActivateStep2Guard } from './guards/model-color.guard';

export const routes: Routes = [
  {
    path: 'models',
    component: SelectModelAndColorComponent,
  },
  {
    path: 'options:modelCase',
    component: SelectConfigAndOptionsComponent,
    canActivate: [canActivateStep2Guard],
  },
  { path: 'summary', component: SummaryComponent },
  { path: '**', redirectTo: 'models' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
