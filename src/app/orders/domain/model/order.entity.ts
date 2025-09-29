export class Order {
      id: number;
      description: string;
      weight: number;
      height: number;
      status: string;
      id_customer: string;
      id_dealer: string;
      id_branch: string;

      constructor(){
        this.id=0;
        this.description='';
        this.weight=0.0;
        this.height=0.0;
        this.status='';
        this.id_customer='';
        this.id_dealer='';
        this.id_branch='';
      }
}
