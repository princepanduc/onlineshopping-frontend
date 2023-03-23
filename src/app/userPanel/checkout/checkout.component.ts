import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/adminPanel/models/order.model';
import { CartService } from 'src/app/adminPanel/services/cartService/cart.service';
import { OrderService } from 'src/app/adminPanel/services/orderService/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  totalPrice:number | undefined
  constructor(
    private cartService:CartService ,
    private orderService:OrderService,
    private router:Router
    ) { }

  ngOnInit(): void {
   
    this.cartService.currentCart().subscribe((result) => {
    //   let price = 0;
    //   result.forEach((item) => {
    //     if(item.pro_qnt){
    //       price = price + (+item.pro_price* +item.pro_qnt);
    //     }
    //   });
    //  this.totalPrice = +(price+100+(price*.10)-(price*.0)).toFixed(3);

    let totalPrice = localStorage.getItem('totalPrice');
    let currenttotalPrice = totalPrice && JSON.parse(totalPrice);

      this.totalPrice=currenttotalPrice;
    });


  };

  orderNow(data:Order){
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if(this.totalPrice){
      let orderData:Order = {
        ...data,
        totalPrice:this.totalPrice,
        userId,
        status:'In Progress'
      }
      this.orderService.orderNow(orderData).subscribe((result)=>{
        if(result){
          alert("Order Placed")
          window.print();
          this.router.navigate(['/myOrder']);
        }
        
      })
    }


  }

  print(){
    window.print();
  }

}
