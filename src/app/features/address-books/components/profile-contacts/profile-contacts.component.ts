import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-contacts',
  imports: [],
  templateUrl: './profile-contacts.component.html',
  styleUrl: './profile-contacts.component.scss'
})
export class ProfileContactsComponent {
 email = input.required<string>();
 website = input.required<string>();
 contact = input.required<string>();
}
