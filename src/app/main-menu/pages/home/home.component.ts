// home.component.ts
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const reveals = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
      for (let el of reveals) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150) {
          el.classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
  }
}
