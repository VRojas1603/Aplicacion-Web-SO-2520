import { Component } from '@angular/core';

import {RouterOutlet} from '@angular/router';
import {Layout} from './shared/presentation/components/layout/layout';

@Component({
  selector: 'app-root', // Debe coincidir con index.html
  standalone: true,
  imports: [RouterOutlet, Layout],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
