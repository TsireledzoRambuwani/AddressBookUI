import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-profile-contacts',
  imports: [MatCardModule],
  templateUrl: './profile-contacts.component.html',
  styleUrl: './profile-contacts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileContactsComponent {
 email = input.required<string>();
 website = input.required<string>();
 contact = input.required<string>();
}
