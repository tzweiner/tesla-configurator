import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-select-model-and-color',
  templateUrl: './select-model-and-color.component.html',
  styleUrl: './select-model-and-color.component.scss'
})
export class SelectModelAndColorComponent {


  public inputModel: (FormControl) = new FormControl();
  public inputColor: (FormControl) = new FormControl();

}
