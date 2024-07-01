import { Component } from '@angular/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ 
    MatToolbarRow,
    MatToolbar
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent {

}
