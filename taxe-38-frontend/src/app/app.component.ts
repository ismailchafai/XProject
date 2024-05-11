import {Component, inject, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Title} from "@angular/platform-browser";
import {IconSetService} from "@coreui/icons-angular";
import {iconSubset} from "./icons/icon-subset";
import {TokenService} from "./controller/auth/services/token.service";
import {AuthService} from "./controller/auth/services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet/>'
})
export class AppComponent implements OnInit{
  title = 'taxe-38';

  http = inject(HttpClient)

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService,
    private tokenService: TokenService,
    private authService:AuthService
  ) {
    this.titleService.setTitle(this.title);
    this.iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    // if (!this.tokenService.isLoggedIn()) this.router.navigate(["login"]).then()
    //
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //     return;
    //   }
    // });
    if (this.tokenService.isLoggedIn())
    {
      this.authService.loadJwtTokenFromLocalStrage();
      console.log("usrname :"+this.authService.username );
      console.log("role :"+this.authService.roles );
    }

  }


}
