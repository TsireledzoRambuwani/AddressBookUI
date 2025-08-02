import { ChangeDetectionStrategy, Component, input, OnInit, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-buttons',
  imports: [MatButtonModule],
  templateUrl: './profile-buttons.component.html',
  styleUrl: './profile-buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileButtonsComponent{
  id = input.required<string>();
  websiteUrl = input.required<string>();
  requestCv = output<string>(); 

 onRequestCV(){
  this.requestCv.emit(this.id())
 }
}
