import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navigation-buttons',
  imports: [ 
    MatButtonModule
  ],
  templateUrl: './navigation-buttons.component.html',
  styleUrl: './navigation-buttons.component.scss'
})
export class NavigationButtonsComponent {
  currentIndex = input.required<number>();
  addressBookLength = input.required<number>();
  next = output();  
  previous = output();  
  first = output();  
  last = output();  


  navigateFirst(){
      this.first.emit();
      }

   navigateNext(){
    this.next.emit();
      }

  navigatePrevious(){
    this.previous.emit();
  }

  navigateLast(){
    this.last.emit();
  }
    }
