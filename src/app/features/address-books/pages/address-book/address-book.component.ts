import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { LoadingSpinnerComponent } from '../../../../shared/components/loading-spinner/loading-spinner.component';
import { Observable } from 'rxjs';
import { AddressBook } from '../../models/addressbook.model';
import { Store } from '@ngrx/store';
import { AddressBookActions } from '../../store/actions/addressBook.action';
import { selectAddressBooks } from '../../store/selectors/addressBook.selector';
import { ProfileImageComponent } from '../../components/profile-image/profile-image.component';
import { Router } from '@angular/router';
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
  styleUrl: './address-book.component.scss'
})
export class AddressBookComponent implements OnInit {

addressBooks! :AddressBook[];

loading$!: Observable<boolean>;

constructor(private store: Store, private router: Router){}

currentIndex =0;
currentAddressBook!: AddressBook;

  ngOnInit() {

    this.getAddressBooks();
  }


    getAddressBooks(){
          this.store.dispatch(AddressBookActions.loadAddressBooks());
          this.store.select(selectAddressBooks).subscribe(res =>
            {
              
                this.addressBooks = res
                this.getAddressBook(0);
          });
    }

    getAddressBook(index: number){ 
       if(index >= 0 && index < this.addressBooks?.length){
        this.currentIndex = index;
        this.currentAddressBook = this.addressBooks[this.currentIndex]   
       }   

  }

  requestCV(id: string){
    console.log(id)
  }

  navigateFirst(){
    this.getAddressBook(0);
  }

   navigateNext(){
    if(this.currentIndex < this.addressBooks.length -1){
      this.getAddressBook(this.currentIndex + 1);
    }
  
  }

  navigatePrevious(){
    if(this.currentIndex > 0){
      this.getAddressBook(this.currentIndex - 1);
    }
  }

  navigateLast(){
    this.getAddressBook(this.addressBooks.length - 1);
  }

}
