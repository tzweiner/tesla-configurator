import { CarModel, Color } from './car-model.model';
import { Config } from './options-model.model';

export interface SelectionsModel {
  model?: CarModel;
  color?: Color;
  config?: Config | null | undefined;
  tow?: boolean;
  wheel?: boolean;
}
