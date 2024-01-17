import { Config, OptionsModel } from '../models/options-model.model';
import { SelectionsModel } from '../models/selections.model';
import { CarModel, Color } from '../models/car-model.model';

export const mockConfig1: Config = {
  id: 1,
  description: 'some config',
  range: 135,
  speed: 300,
  price: 35000,
};

export const mockConfig2: Config = {
  id: 1,
  description: 'some other config',
  range: 230,
  speed: 350,
  price: 60000,
};

export const mockOptions1: OptionsModel = {
  configs: [mockConfig1, mockConfig2],
  towHitch: false,
  yoke: true,
};

export const mockOptions2: OptionsModel = {
  configs: [mockConfig1],
  towHitch: true,
  yoke: true,
};

export const color1: Color = {
  code: 'white',
  description: 'Pearl White Multi-Coat',
  price: 0,
};
export const color2: Color = {
  code: 'black',
  description: 'Solid Black',
  price: 3000,
};

export const color3: Color = {
  code: 'black',
  description: 'Satin Black',
  price: 6500,
};
export const color4: Color = {
  code: 'red',
  description: 'Red Multi-Coat',
  price: 2000,
};

export const carmodel1: CarModel = {
  code: 'S',
  description: 'Model S',
  colors: [color2, color1],
};

export const carmodel2: CarModel = {
  code: 'C',
  description: 'Model Car',
  colors: [color4, color3, color1],
};

export const mockSelection1: SelectionsModel = {
  model: carmodel1,
  color: color1,
  config: mockConfig1,
  tow: false,
  wheel: false,
};

export const mockSelection2: SelectionsModel = {
  model: carmodel1,
  color: color1,
  config: mockConfig1,
  tow: false,
  wheel: false,
};
