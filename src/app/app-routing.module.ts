import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './adminPanel/admin-home/admin-home.component';
import { DefaultComponent } from './adminPanel/admin-home/default/default.component';
import { AddCouponComponent } from './adminPanel/components/add-coupon/add-coupon.component';
import { AddcategoryComponent } from './adminPanel/components/addcategory/addcategory.component';
import { AddproductComponent } from './adminPanel/components/addproduct/addproduct.component';
import { AddvendorComponent } from './adminPanel/components/addvendor/addvendor.component';
import { CreatepurchaseComponent } from './adminPanel/components/createpurchase/createpurchase.component';
import { OrderDetailsComponent } from './adminPanel/components/order-details/order-details.component';
import { StockComponent } from './adminPanel/components/stock/stock.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { CardComponent } from './userPanel/card/card.component';
import { CategoryWiseProductViewComponent } from './userPanel/category-wise-product-view/category-wise-product-view.component';
import { CheckoutComponent } from './userPanel/checkout/checkout.component';
import { ContactComponent } from './userPanel/contact/contact.component';
import { FontPageComponent } from './userPanel/font-page/font-page.component';
import { LoginPageComponent } from './userPanel/login-page/login-page.component';
import { MyOrderComponent } from './userPanel/my-order/my-order.component';
import { PaymentmethodComponent } from './userPanel/paymentmethod/paymentmethod.component';
import { ProductViewComponent } from './userPanel/product-view/product-view.component';
import { UserAuthComponent } from './userPanel/user-auth/user-auth.component';
import { UserHomeComponent } from './userPanel/user-home/user-home.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/userHome'
  },
  { path: 'userHome', component: UserHomeComponent },
  { path: 'FontPageComponent', component: FontPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'UserAuth', component: UserAuthComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'card', component: CardComponent },
  { path: 'product/:proid/card', component: CardComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'paymentmethod', component: PaymentmethodComponent },
  { path: 'product/:proid/view', component: ProductViewComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'myOrder', component: MyOrderComponent },
  { path: 'productCat/:pro_cat/view', component: CategoryWiseProductViewComponent },


  {
    path: 'admin',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'home',
        component: AdminHomeComponent
      },
      {
        path: 'category',
        component: AddcategoryComponent
      },
      {
        path: 'purchase',
        component: CreatepurchaseComponent
      },
      {
        path: 'addProduct',
        component: AddproductComponent
      },
      {
        path: 'addvendor',
        component: AddvendorComponent
      },
      {
        path: 'orderDetails',
        component: OrderDetailsComponent
      },
      {
        path: 'addCoupon',
        component: AddCouponComponent
      },
      {
        path: 'stock',
        component: StockComponent
      }



    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
