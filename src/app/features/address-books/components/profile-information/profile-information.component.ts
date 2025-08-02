import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AddressBook } from '../../models/addressbook.model';
import { ProfileContactsComponent } from '../profile-contacts/profile-contacts.component';
import {  MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-profile-information',
  imports: [
    MatCardModule,
    ProfileContactsComponent
  ],
  templateUrl: './profile-information.component.html',
  styleUrl: './profile-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileInformationComponent {
  
 addressBook = input.required<AddressBook>();
 
}
