import {inject, Injectable} from "@angular/core";
import { AddressBookService } from "../../services/address-book.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ShowAlertService } from "../../../../shared/services/show-alert.service";
import { AddressBookActions } from "../actions/addressBook.action";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class AddressBooksEffects {
actions$ = inject(Actions);
addressBooksService = inject(AddressBookService);
alert = inject(ShowAlertService);

  loadAddressBooks$ = createEffect(() => 
         this.actions$.pipe(
      ofType(AddressBookActions.loadAddressBooks),
      exhaustMap(() => this.addressBooksService.getAddressBooks()
        .pipe(
          map((res :any) => 
            { 
                if([200,2001].includes(res.code))
                    {

                    return AddressBookActions.loadAddressBooksSuccess({ addressBooks: res.data})
                    }
                else{
                        return AddressBookActions.loadAddressBooksFail({ error: res.message})
                    }

            }),
          catchError((error) => of(AddressBookActions.loadAddressBooksFail({ error: error.error})))
        )
      )
    ));

     
      requestCV$ = createEffect(() => 
         this.actions$.pipe(
      ofType(AddressBookActions.requestCV),
      exhaustMap((action) => 
        this.addressBooksService.requestCV(action.id)
        .pipe(
          map((res :any) => 
            { 
                if([200,2001].includes(res.code) && res.data.succeeded)
                    {
                        this.alert.showSuccess("Successfully Requested CV.")
                    return AddressBookActions.requestCVSuccess({ serviceResponse: res.data})
                    }
                    
                else{
           
                        this.alert.showError(res.data.error)
                        return AddressBookActions.requestCVFail({ error: res.message})
                    }

            }),
          catchError((error) => of(
            
            AddressBookActions.requestCVFail({ error: error.error})
          ))
        )
      )
    ));
}
