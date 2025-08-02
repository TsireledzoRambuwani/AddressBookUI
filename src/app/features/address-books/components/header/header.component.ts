import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';  

@Component({
  selector: 'app-header',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

}
