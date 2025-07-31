import { Routes } from '@angular/router';
import { AddressBookComponent } from './features/address-books/pages/address-book/address-book.component';


export const routes: Routes = [

    { path:'', pathMatch: 'full', redirectTo:"addressBook" },
    { path:'addressBook', component: AddressBookComponent },
    {path : '***' , redirectTo:"addressBook"}
];
