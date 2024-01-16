import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { DataService } from '../services/data.service';
import { inject } from '@angular/core';

export const modelAndColorGuard: (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  router: Router,
) => boolean = () => {
  // const selections = inject(DataService).getSelections();
  // return !!selections?.model?.code && !!selections?.color?.code;
  return inject(DataService).isModelColorPairSet();
};
