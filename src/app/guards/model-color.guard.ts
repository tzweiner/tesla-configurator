import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { DataService } from '../services/data.service';

export const canActivateStep2Guard: (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  router: Router,
) => boolean | Promise<boolean> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  router: Router,
) => {
  const selections = inject(DataService).getModelColorPairSelection();
  if (!selections?.modelCode || !selections?.colorCode) {
    return false;
  }
  switch (state.url) {
    case '/options:modelCase':
      return router.navigate([`/options:'${selections.modelCode}`], { state });
    case '/summary':
      return router.navigate([`/summary:'${selections.modelCode}`], { state });
    default:
      return router.navigate([`/models`], { state });
  }
};
