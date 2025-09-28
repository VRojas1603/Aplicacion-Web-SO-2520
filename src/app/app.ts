import { Component } from '@angular/core';

import {Layout} from './shared/presentation/components/layout/layout';

@Component({
  selector: 'app-root', // Debe coincidir con index.html
  standalone: true,
  imports: [Layout],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
