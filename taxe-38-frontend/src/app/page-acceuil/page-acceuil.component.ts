import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-page-acceuil',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './page-acceuil.component.html',
  styleUrl: './page-acceuil.component.scss'
})
export class PageAcceuilComponent {
  constructor(private router:Router) {
  }

}
