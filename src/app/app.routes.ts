import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SelectModelAndColorComponent } from './select-model-and-color/select-model-and-color.component';
import { SelectConfigAndOptionsComponent } from './select-config-and-options/select-config-and-options.component';
import { SummaryComponent } from './summary/summary.component';
import { summaryResolver } from './services/data.service';
import { canActivateStep2Guard } from './guards/model-color.guard';

export const routes: Routes = [
  {
    path: 'models',
    component: SelectModelAndColorComponent,
  },
  {
    path: 'options/:modelCode',
    component: SelectConfigAndOptionsComponent,
    canActivate: [canActivateStep2Guard],
    resolve: { selection: summaryResolver },
  },
  {
    path: 'summary/:modelCode',
    component: SummaryComponent,
  },
  { path: '**', redirectTo: 'models' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
