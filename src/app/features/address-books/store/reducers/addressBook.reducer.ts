import { createReducer, on } from "@ngrx/store";
import { AddressBookState } from "..";
import { AddressBookActions } from "../actions/addressBook.action";

export const AddressBookReducer = createReducer(
  AddressBookState,
    on(AddressBookActions.loadAddressBooks, state => (
            {
                ...state, 
                loading: true,
            }
        )),
     on(AddressBookActions.loadAddressBooksSuccess, (state,{ addressBooks })=> (
            {
                ...state, 
                addressBooks :addressBooks,
                loading: false,
            }
        )),
     on(AddressBookActions.loadAddressBooksFail, (state,{ error })=> (
            {
                ...state, 
                error :error,
                loading: false,
            }
        )),
       
     on(AddressBookActions.requestCV, state => (
            {
                ...state, 
                loading: true,
            }
        )),

         on(AddressBookActions.requestCVSuccess, state => (
            {
                ...state, 
                loading: false,
            }
        )),

           on(AddressBookActions.requestCVFail, (state,{ error })=> (
            {
                ...state, 
                error :error,
                loading: false,
            }
        )),

)