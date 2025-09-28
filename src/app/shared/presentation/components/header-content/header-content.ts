import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {RouterLink} from '@angular/router';

import {AuthenticationSectionComponent} from '../../../../iam/presentation/components/authentication-section/authentication-section';

@Component({
  selector: 'app-header-content',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, AuthenticationSectionComponent],
  standalone: true,
  templateUrl: './header-content.html',
  styleUrl: './header-content.css'
})
export class HeaderContent {

}
