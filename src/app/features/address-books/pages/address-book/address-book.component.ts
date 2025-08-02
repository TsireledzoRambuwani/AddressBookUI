import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../../app-header/components/header/header.component';
import { LoadingSpinnerComponent } from '../../../../shared/components/loading-spinner/loading-spinner.component';
import { Observable, Subscription } from 'rxjs';
import { AddressBook } from '../../models/addressbook.model';
import { Store } from '@ngrx/store';
import { AddressBookActions } from '../../store/actions/addressBook.action';
import { selectAddressBookLoading, selectAddressBooks } from '../../store/selectors/addressBook.selector';
import { ProfileImageComponent } from '../../components/profile-image/profile-image.component';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from '../../components/navigation-buttons/navigation-buttons.component';
import { ProfileButtonsComponent } from '../../components/profile-buttons/profile-buttons.component';
import { ProfileInformationComponent } from '../../components/profile-information/profile-information.component';


@Component({
  selector: 'app-address-book',
  imports: [
    HeaderComponent,
      CommonModule,
      ProfileInformationComponent,
      ProfileButtonsComponent,
      HeaderComponent,
      LoadingSpinnerComponent,
      ProfileImageComponent,
      NavigationButtonsComponent,
    ],
  templateUrl: './address-book.component.html',
  styleUrl: './address-book.component.scss',

})
export class AddressBookComponent implements OnInit,OnDestroy {

addressBooks = signal<AddressBook[]>([]);;
loading$!: Observable<boolean>;
subscription!: Subscription;
currentIndex = signal(0);
currentAddressBook!: AddressBook;

store = inject(Store);

  ngOnInit() {

    this.getAddressBooks();
  }


    getAddressBooks(){
          this.store.dispatch(AddressBookActions.loadAddressBooks());
        this.subscription =  this.store.select(selectAddressBooks)
          .subscribe(res =>
            {
              
                this.addressBooks.set(res);
                this.getAddressBook(0);
          });
    }

    getAddressBook(index: number){ 
       if(index >= 0 && index < this.addressBooks().length){
        this.currentIndex.set(index);
        this.currentAddressBook = this.addressBooks()[this.currentIndex()]   
       }   

  }

  requestCV(id: string){
    this.store.dispatch(AddressBookActions.requestCV({id}))
   this.loading$ = this.store.select(selectAddressBookLoading);
  }

  navigateFirst(){
    this.getAddressBook(0);
  }

   navigateNext(){
    if(this.currentIndex() < this.addressBooks().length -1){
      this.getAddressBook(this.currentIndex() + 1);
    }
  
  }

  navigatePrevious(){
    if(this.currentIndex() > 0){
      this.getAddressBook(this.currentIndex() - 1);
    }
  }

  navigateLast(){
    this.getAddressBook(this.addressBooks().length - 1);
  }

    ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
