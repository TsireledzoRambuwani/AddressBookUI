import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AddressBookModel } from "../../models/addressbook.model";

export const selectAddressBookState = createFeatureSelector<AddressBookModel>('addressbooks');

export const selectAddressBooks = createSelector(
  selectAddressBookState,
  (state) => state.addressBooks
);

export const selectAddressBook = createSelector(
  selectAddressBookState,
  (state) => state.addressBook
);

export const selectAddressBookLoading = createSelector(
  selectAddressBookState,
  (state) => state.loading
);

export const selectAddressBookErros = createSelector(
  selectAddressBookState,
  (state) => state.error
);