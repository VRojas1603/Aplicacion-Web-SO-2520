import { Component } from '@angular/core';
import { HeaderComponent } from './presentation/components/header/header.component';
import { HomeComponent } from './presentation/pages/home/home.component';

@Component({
  selector: 'app-root', // Debe coincidir con index.html
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
