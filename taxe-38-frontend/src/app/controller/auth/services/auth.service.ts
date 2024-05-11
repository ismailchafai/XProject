import {Injectable, inject, Inject, PLATFORM_ID} from '@angular/core';
import {environment} from "src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {JwtRequest} from "src/app/controller/auth/entities/jwt-request";
import {JwtResponse} from "src/app/controller/auth/entities/jwt-response";
import {JwtRequestValidator} from "src/app/controller/auth/validators/jwt-request.validator";
import {jwtDecode} from "jwt-decode";
import {isPlatformBrowser} from "@angular/common";
import {Router} from "@angular/router";
import {TokenService} from "./token.service";
import {RedevableService} from "../../services/redevable.service";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _item: JwtRequest | undefined;
  private url = environment.login
  private http = inject(HttpClient)

  private tokenService = inject(TokenService)

  constructor(@Inject(PLATFORM_ID) private platformId:Object,private router:Router,
              private readvable :RedevableService) {
  }

  isAuthService : boolean =false;
  roles : any;
  username : any;
  accessToken:any;


  khona:any;

  public login() {
    return this.http.post< JwtResponse>(this.url, this.item);
  }

  get item(): JwtRequest {
    if (this._item == null)
      this._item = new JwtRequest();
    return this._item;
  }

  set item(val: JwtRequest | undefined) {
    this._item = val;
  }


  loadProfile(data: any) {
    this.isAuthService=true
    this.accessToken=this.tokenService.getToken();
    // @ts-ignore
    let decodejwt = jwtDecode(this.accessToken) as { sub: string, roles: string }

    //jwt decoder!!!!!
    console.log(decodejwt)
    window.localStorage.setItem("jwt-token-access",this.accessToken);
    this.username=decodejwt.sub;
    this.roles=decodejwt.roles
    this.readvable.findByUsername(this.username).subscribe(
      {
        next: (data: any) => {
          this.khona=data
          console.log(data)
        },
        error: (err: any) => {
          console.log(err)
        }
      }
    )
  }

  logout() {
    this.isAuthService=false;
    this.accessToken=undefined;
    this.username=undefined;
    this.roles=undefined;
    window.localStorage.removeItem("jwt-token-access")
    // this.router.navigateByUrl("/login")
    location.reload();
    this.router.navigateByUrl("/home")
  }


  loadJwtTokenFromLocalStrage() {
    if (isPlatformBrowser(this.platformId)) {
      let tokenAccess=window.localStorage.getItem("jwt-token-access-mohammed");
      if(tokenAccess ){
        this.loadProfile({"accessToken":tokenAccess});
      }
    }
  }
}
