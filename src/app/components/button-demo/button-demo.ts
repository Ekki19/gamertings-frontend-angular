import { Component } from '@angular/core';
import {Button, ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-button-demo',
  imports: [
    Button
  ],
  templateUrl: './button-demo.html',
  styleUrl: './button-demo.css',
})
export class ButtonDemo {}
