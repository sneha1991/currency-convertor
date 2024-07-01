import { Component } from '@angular/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ 
    MatToolbarRow,
    MatToolbar
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
