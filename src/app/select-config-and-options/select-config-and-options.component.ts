import { Component } from '@angular/core';
import {Form, FormControl} from "@angular/forms";

@Component({
  selector: 'app-select-config-and-options',
  templateUrl: './select-config-and-options.component.html',
  styleUrl: './select-config-and-options.component.scss'
})
export class SelectConfigAndOptionsComponent {

  public inputConfig: FormControl = new FormControl();
  public checkboxHitch: FormControl = new FormControl<boolean>(false);
  public checkboxWheel: FormControl = new FormControl<boolean>(false);

}
