import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { AddressBook } from "../../models/addressbook.model";
import { ApiServiceResponse } from "../../../../core/models/apiServiceResponse.model";

export const AddressBookActions = createActionGroup({
  source: 'Address Books Page',
  events: {
    'Load Address Books': emptyProps(),
    'Load Address Books Success': props<{ addressBooks: AddressBook[] }>(),
    'Load Address Books Fail': props<{ error: string; }>(),

    'Load Address Book': props<{id :string}>(),
    'Load Address Book Success': props<{ addressBook: AddressBook}>(),
    'Load Address Book Fail': props<{ error: string; }>(),

    'Request CV': props<{id :string}>(),
    'Request CV Success': props<{ serviceResponse: ApiServiceResponse }>(),
    'Request CV Fail': props<{ error: string; }>(),
    
    'EmptyAction': emptyProps(),

  },
});