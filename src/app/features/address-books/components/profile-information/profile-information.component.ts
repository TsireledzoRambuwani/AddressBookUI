import { Component, input } from '@angular/core';
import { AddressBook } from '../../models/addressbook.model';
import { ProfileContactsComponent } from '../profile-contacts/profile-contacts.component';

@Component({
  selector: 'app-profile-information',
  imports: [
    ProfileContactsComponent
  ],
  templateUrl: './profile-information.component.html',
  styleUrl: './profile-information.component.scss'
})
export class ProfileInformationComponent {
  
 addressBook = input.required<AddressBook>();
 
}
