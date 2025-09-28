import { Component } from '@angular/core';
import {HeaderContent} from '../header-content/header-content';
import {HomeComponent} from '../../../../presentation/pages/home/home.component';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderContent,
    HomeComponent
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
