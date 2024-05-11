import { Component } from '@angular/core';
import {AuthService} from "../../controller/auth/services/auth.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
constructor(protected authservice:AuthService) {
}
}
