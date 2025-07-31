import { Injectable } from '@angular/core';
import { ApiHttpService } from '../../../core/api-http.service';
import {apiConstants} from '../../../core/constants/apiConstants'
import { AddressBook } from '../models/addressbook.model';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  private baseUrl= apiConstants.AddressBook

  constructor(private httpService :ApiHttpService ) { }

  getAddressBooks(){
    return this.httpService.get<AddressBook[]>(`${this.baseUrl}/GetAll`)
  }

   getAddressBook(id :string){
    return this.httpService.get<AddressBook>(`${this.baseUrl}/GetById?id=${id}`)
  }

    requestCV(id :string){
    return this.httpService.get<AddressBook>(`${this.baseUrl}/RequestCV?id=${id}`)
  }
}

