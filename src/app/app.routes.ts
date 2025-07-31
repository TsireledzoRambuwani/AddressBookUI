import { Routes } from '@angular/router';
import { AddressBookComponent } from './features/address-books/components/address-book/address-book.component';
import { AddressBooksComponent } from './features/address-books/pages/address-books/address-books.component';

export const routes: Routes = [

    { path:'', pathMatch: 'full', redirectTo:"addressBooks" },
    { path:'addressBooks', component: AddressBooksComponent },
    { path :'addressBook/id', component:AddressBookComponent },
    {path : '***' , redirectTo:"addressBooks"}
];
