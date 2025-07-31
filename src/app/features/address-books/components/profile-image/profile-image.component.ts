import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  imports: [],
  templateUrl: './profile-image.component.html',
  styleUrl: './profile-image.component.scss'
})
export class ProfileImageComponent {
  imageUrl = input.required<string>();
}
