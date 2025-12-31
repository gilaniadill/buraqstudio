import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  showMore: boolean = false;
}
