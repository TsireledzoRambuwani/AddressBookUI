import { Component, input } from '@angular/core';
import { AddressBook } from '../../models/addressbook.model';

@Component({
  selector: 'app-profile-information',
  imports: [],
  templateUrl: './profile-information.component.html',
  styleUrl: './profile-information.component.scss'
})
export class ProfileInformationComponent {
  
 addressBook = input.required<AddressBook>();
 
}
