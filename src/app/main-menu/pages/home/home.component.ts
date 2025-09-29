import { Order } from './../../../orders/domain/model/order.entity';
import { OlvaApp } from './../../../orders/application/olva-app';
// home.component.ts
import { Component, AfterViewInit, OnInit,inject,Signal } from '@angular/core';
import { ListOrder } from '../../../orders/presentation/list-order/list-order';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ListOrder]
})
export class HomeComponent implements AfterViewInit,OnInit {
    protected olvaApp = inject(OlvaApp);
    protected readonly order:Signal<Order[]>= this.olvaApp.orders;

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

  ngOnInit(): void {
        this.olvaApp.loadOrders()
  }
}
