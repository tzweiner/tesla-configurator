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
) => boolean = () => {
  const selections = inject(DataService).getSelections();
  return !!selections?.model?.code && !!selections?.color?.code;
};
