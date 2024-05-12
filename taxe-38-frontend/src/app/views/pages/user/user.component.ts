import {Component, OnInit} from '@angular/core';
import {LocaleService} from "../../../controller/services/locale.service";
import {AuthService} from "../../../controller/auth/services/auth.service";
import {Locale} from "../../../controller/entities/locale";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
dataLocale=new Array<Locale> ;
    ngOnInit(): void {
     // this.findLocaleByUserName();
    }
constructor(private localeService:LocaleService , public authService:AuthService) {}
  //findLocaleByUserName(){
    //  this.localeService.findByRedevableUsername(this.authService.username).subscribe({
      //  next:data=>{
        //  this.dataLocale=data ;
          //console.log("/////////////////////////////////////")
          //console.log(data)
          //console.log("?????????????????????????????????????")
        //},
        //error:err=>{
         // console.log(err)
        //}
      //})
  //}
}
