import { createEntityAdapter } from "@ngrx/entity";
import { AddressBook, AddressBookModel } from "../models/addressbook.model";

export const AddressBookAdapter = createEntityAdapter<AddressBook>()


export const AddressBookState: AddressBookModel = AddressBookAdapter.getInitialState({
    addressBooks: [],
    loading: false,
    error:''
});