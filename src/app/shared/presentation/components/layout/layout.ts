import { Component } from '@angular/core';
import {HeaderContent} from '../header-content/header-content';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderContent,
    RouterOutlet,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
