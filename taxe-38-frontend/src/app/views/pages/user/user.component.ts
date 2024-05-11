import {Component, OnInit} from '@angular/core';
import {LocaleService} from "../../../controller/services/locale.service";
import {AuthService} from "../../../controller/auth/services/auth.service";
import {Locale} from "../../../controller/entities/locale";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
dataLocale=new Array<Locale> ;
    ngOnInit(): void {
      this.findLocaleByUserName();
    }
constructor(private localeService:LocaleService , private authService:AuthService) {}
  findLocaleByUserName(){
      this.localeService.findByRedevableUserName(this.authService.username).subscribe({
        next:data=>{
          this.dataLocale=data ;
          console.log("/////////////////////////////////////")
          console.log(data)
          console.log("?????????????????????????????????????")
        },
        error:err=>{
          console.log(err)
        }
      })
  }
}
