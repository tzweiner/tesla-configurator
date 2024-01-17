import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from '../services/data.service';
import { inject } from '@angular/core';

export const modelAndColorGuard: (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => boolean = () => {
  return inject(DataService).isModelColorPairSet();
};
