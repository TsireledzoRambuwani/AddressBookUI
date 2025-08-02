import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  imports: [],
  templateUrl: './profile-image.component.html',
  styleUrl: './profile-image.component.scss',
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileImageComponent {
  imageUrl = input.required<string>();
}
