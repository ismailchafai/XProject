import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {
  ButtonDirective, CardBodyComponent, CardComponent, ColComponent, ColDirective,
  NavComponent, NavItemComponent, PlaceholderAnimationDirective,
  RowComponent, SpinnerComponent, TableDirective, PlaceholderDirective,
  PageItemDirective, PageLinkDirective, PaginationComponent,
  DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownHeaderDirective, DropdownItemDirective,
  ModalComponent, ModalToggleDirective, ModalHeaderComponent, ModalBodyComponent, TooltipDirective, ModalFooterComponent, PopoverDirective, ModalTitleDirective, ButtonCloseDirective,
} from "@coreui/angular";
import {LocaleService} from "../../controller/services/locale.service";
import {Locale} from "../../controller/entities/locale";
import {NgForOf} from "@angular/common";
import {AuthService} from "../../controller/auth/services/auth.service";

@Component({
  selector: 'app-listlocalbyredevale',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './listlocalbyredevale.component.html',
  styleUrl: './listlocalbyredevale.component.scss'
})
export class ListlocalbyredevaleComponent implements OnInit{
  public dataLocale :Array<Locale>=new Array<Locale>();
  constructor(private localeService:LocaleService, private authService:AuthService) {
  }
  ngOnInit() {
    this.getAllLocaleByRed()
  }

  public  getAllLocaleByRed(){
    this.localeService.findByRedevableUsername(this.authService.username).subscribe({
      next:data=>{
        this.dataLocale=data
        console.log(data);
      },
      error:err => {
        console.log(err)
      }
    })
  }
}
