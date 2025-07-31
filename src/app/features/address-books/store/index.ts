import { createEntityAdapter } from "@ngrx/entity";
import { AddressBook, AddressBookModel } from "../models/addressbook.model";

export const AddressBookAdapter = createEntityAdapter<AddressBook>()


export const AddressBookState: AddressBookModel = AddressBookAdapter.getInitialState({
    addressBook:{
        id:       '',
        firstname: '',
        surname:   '',
        about:    '',
        email:     '',
        website:   '',
        contacts:  '',
        imageUrl:  '',
    },
    addressBooks: [],
    loading: false,
    error:''
});