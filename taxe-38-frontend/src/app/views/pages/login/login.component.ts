import {Component, Inject, inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, NgClass, NgStyle} from '@angular/common';
import {IconDirective} from '@coreui/icons-angular';
import {
  ButtonDirective, CardBodyComponent, CardComponent, CardGroupComponent,
  ColComponent, ContainerComponent, FormControlDirective, FormDirective,
  InputGroupComponent, InputGroupTextDirective, RowComponent, SpinnerComponent,
  TextColorDirective, FormFeedbackComponent
} from '@coreui/angular';
import {AuthService} from "src/app/controller/auth/services/auth.service";
import {Router, RouterLink} from "@angular/router";
import {TokenService} from "src/app/controller/auth/services/token.service";
import {JwtRequestValidator} from "src/app/controller/auth/validators/jwt-request.validator";
import {FormsModule} from "@angular/forms";
import {JwtRequest} from "src/app/controller/auth/entities/jwt-request";
import {jwtDecode} from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent,
    CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective,
    ButtonDirective, NgStyle, FormsModule, SpinnerComponent, RouterLink, FormFeedbackComponent, NgClass
  ]
})
export class LoginComponent {


  constructor(@Inject(PLATFORM_ID) private platformId:Object,private authService:AuthService) {
  }
  isAuthService : boolean =false;
  roles : any;
  username : any;
  accessToken:any;



  loading = false

  // @ts-ignore
  private authService = inject(AuthService)
  private router = inject(Router)
  private tokenService = inject(TokenService)
  protected validator = JwtRequestValidator.init(() => this.item)
  get item(): JwtRequest {
    return this.authService.item;
  }

  set item(value: JwtRequest | undefined) {
    this.authService.item = value;
  }

  login() {
    if (!this.validator.validate()) return;
    this.loading = true;
    this.authService.login().subscribe({
      next: data => {
        this.tokenService.setToken(data.accessToken)
        this.validator.reset()
        this.authService.loadProfile(this.tokenService.getToken());
        //@ts-ignore
        this.item = undefined
        console.log(this.authService.roles[0])
        if(data.roles[0]=="ADMIN"){
          this.router.navigate(["redevable"]).then()
        }
        if(data.roles[0]=="USER"){
          this.router.navigate(["user"]).then()
        }

        this.loading = false
      },
      error: err => {
        console.log(err)
        this.loading = false;
      }
    })
  }
  loadToke(){

  }
  localStorage(){

  }
}
