import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {Order} from '../domain/model/order.entity';
import {OrderResponse} from '../domain/model/order-response'
import {OrderAssembler} from '../domain/model/order-assembler';
import {MatTableDataSource} from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class OlvaApi {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.base_url_json;
  private orderEndpoint = environment.orders;

  dataSource = new MatTableDataSource<Order>([]);
  
  getOrders(): Observable<Order[]> {
    return this.http.get<OrderResponse[]>(`${this.baseUrl}${this.orderEndpoint}`).pipe
    (map(response=>OrderAssembler.toEntitiesFromResponse(response)))
  }

}
