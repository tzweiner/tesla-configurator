import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SelectModelAndColorComponent } from './select-model-and-color/select-model-and-color.component';
import { SelectConfigAndOptionsComponent } from './select-config-and-options/select-config-and-options.component';
import { SummaryComponent } from './summary/summary.component';
import { optionsResolver } from './services/data.service';
import { modelAndColorGuard } from './guards/model-color.guard';
import { configGuard } from './guards/config.guard';

export const routes: Routes = [
  {
    path: 'models',
    component: SelectModelAndColorComponent,
  },
  {
    path: 'options/:modelCode',
    component: SelectConfigAndOptionsComponent,
    canActivate: [modelAndColorGuard],
    resolve: { selection: optionsResolver },
  },
  {
    path: 'summary/:modelCode',
    component: SummaryComponent,
    canActivate: [configGuard],
  },
  { path: '**', redirectTo: 'models' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
