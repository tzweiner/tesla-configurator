import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { DataService } from '../services/data.service';

export const configGuard: (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  router: Router,
) => boolean = () => {
  // const selections = inject(DataService).getSelections();
  // return !!selections?.model && !!selections?.color && !!selections?.config;
  return inject(DataService).isConfigSet();
};
