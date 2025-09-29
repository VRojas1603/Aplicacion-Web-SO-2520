import { Component } from '@angular/core';
import {HeaderContent} from '../header-content/header-content';
import {RouterOutlet} from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderContent,
    RouterOutlet,
    Footer

  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
