import {OrderResponse} from '../model/order-response';
import {Order} from '../model/order.entity';

 export class OrderAssembler {

   static toEntitiesFromResponse( orderResponse: OrderResponse[]):Order[]{
     return orderResponse.map(response =>
       this.toEntityFromResponse(response));
   }

   static toEntityFromResponse(orderResponse: OrderResponse): Order {
     return {
        id: orderResponse.id,
        description: orderResponse.description,
        weight: orderResponse.weight,
        height: orderResponse.height,
        status: orderResponse.status,
        id_customer: orderResponse.id_customer,
        id_dealer: orderResponse.id_dealer,
        id_branch: orderResponse.id_branch
       }
     }
}
