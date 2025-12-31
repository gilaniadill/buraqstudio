import { Component } from '@angular/core';

import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navebar',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './navebar.component.html',
    styleUrls: ['./navebar.component.css']
})
export class NavebarComponent {

}
