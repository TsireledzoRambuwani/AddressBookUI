import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile-buttons',
  imports: [MatButtonModule],
  templateUrl: './profile-buttons.component.html',
  styleUrl: './profile-buttons.component.scss'
})
export class ProfileButtonsComponent {
  id = input.required<string>();
  websiteUrl = input.required<string>();
  requestCv = output<string>(); 
 
 
 onRequestCV(){
  this.requestCv.emit(this.id())
 }
}
