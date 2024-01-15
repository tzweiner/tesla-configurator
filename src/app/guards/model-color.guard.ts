import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { DataService } from '../services/data.service';
import { inject } from '@angular/core';

export const canActivateStep2Guard: (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  router: Router,
) => boolean = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  router: Router,
) => {
  const selections = inject(DataService).getModelColorPairSelection();
  return !!selections?.modelCode && !!selections?.colorCode;
  // if (!selections?.modelCode || !selections?.colorCode) {
  //   return false;
  // }
  // return true;
};
