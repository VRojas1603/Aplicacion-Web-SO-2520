import { Injectable } from '@angular/core';
import {computed, inject,signal} from '@angular/core';
import {Order} from '../domain/model/order.entity'
import {OlvaApi} from '../infrastructure/olva-api';

@Injectable({
  providedIn: 'root'
})
export class OlvaApp {

  private orderSignal = signal<Order[]>([]);
  private olvaApi =inject(OlvaApi);

  readonly orders = computed(() => this.orderSignal());

  loadOrders(){
    if(this.orderSignal().length ==0){
      this.olvaApi.getOrders().subscribe(orders =>{
        this.orderSignal.set(orders);
      })
    }
  }
}
