import { Component,OnInit, input } from '@angular/core';
import { OlvaApp } from '../../application/olva-app';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatCell, MatColumnDef, MatHeaderCell, MatHeaderRow, MatRow, MatTable} from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Order } from '../../domain/model/order.entity';

@Component({
  selector: 'app-list-order',
  imports: [
    MatButton,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './list-order.html',
  styleUrl: './list-order.css'
})
export class ListOrder{

  orders= input<Order[]>([]);
  columns : string[] = [
    'id',
    'description',
    'status',
    'customer',
    'branch',
    'actions'
  ]



}
