import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { DataService } from '../services/data.service';

export const configGuard: (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => boolean = () => {
  return inject(DataService).isConfigSet();
};
