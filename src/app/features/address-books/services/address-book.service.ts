import { Injectable } from '@angular/core';
import {apiConstants} from '../../../core/constants/apiConstants'
import { AddressBook } from '../models/addressbook.model';
import { ApiHttpService } from '../../../core/services/api-http.service';

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

