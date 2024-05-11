import {Component, inject, OnInit} from '@angular/core';
import {
  ButtonDirective, CardBodyComponent, CardComponent, ColComponent, ColDirective,
  NavComponent, NavItemComponent, PlaceholderAnimationDirective,
  RowComponent, SpinnerComponent, TableDirective, PlaceholderDirective,
  PageItemDirective, PageLinkDirective, PaginationComponent,
  DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownHeaderDirective, DropdownItemDirective,
  ModalComponent, ModalToggleDirective, ModalHeaderComponent, ModalBodyComponent, TooltipDirective, ModalFooterComponent, PopoverDirective, ModalTitleDirective, ButtonCloseDirective,
} from "@coreui/angular";
import {NotificationRetardPremierNiveauService} from "src/app/controller/services/notification-retard-premier-niveau.service";
import {NotificationRetardPremierNiveau} from "src/app/controller/entities/notification-retard-premier-niveau";
import {RouterLink} from "@angular/router";
import {IconDirective} from "@coreui/icons-angular";
import {generatePageNumbers, paginationSizes} from "src/app/controller/utils/pagination/pagination";
import {MatCard, MatCardContent} from "@angular/material/card";
import {
  NotificationRetardDeuxiemeNiveauService
} from "../../controller/services/notification-retard-deuxieme-niveau.service";
import {Observable} from "rxjs";
import {NotificationRetardDeuxiemeNiveau} from "../../controller/entities/notification-retard-deuxieme-niveau";
import {AuthService} from "../../controller/auth/services/auth.service";
import {AppUser} from "../../controller/auth/entities/app-user";
import {Redevable} from "../../controller/entities/redevable";


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  standalone: true,
  imports: [
    RowComponent, ColComponent, CardComponent, CardBodyComponent, TableDirective,
    ButtonDirective, RouterLink, IconDirective, IconDirective, NavComponent,
    NavItemComponent, SpinnerComponent, PlaceholderAnimationDirective, PlaceholderDirective,
    ColDirective, PageItemDirective, PageLinkDirective, PaginationComponent,
    DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownHeaderDirective, DropdownItemDirective,
    ModalComponent, ModalToggleDirective, ModalHeaderComponent, ModalBodyComponent, TooltipDirective, ModalFooterComponent, PopoverDirective, ModalTitleDirective, ButtonCloseDirective, MatCard, MatCardContent,
  ],
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{
  protected loading = false
  protected paginating = false
  protected currentIndex: number | undefined = undefined
  protected deleteModel = false

  //variable notification 2
  protected data2:Array<NotificationRetardDeuxiemeNiveau>=new Array<NotificationRetardDeuxiemeNiveau>()
  // services
  private service = inject(NotificationRetardPremierNiveauService)
  private service2 = inject(NotificationRetardDeuxiemeNiveauService)
constructor(private authSerivce:AuthService) {
}
  ngOnInit() {
    this.findAll()
  }

  findAll() {
    this.loading = true
    this.paginate().then(() => this.loading = false)
  }

  async paginate(page: number = this.pagination.page, size: number = this.pagination.size) {
    this.paginating = true
    this.service.findPaginated(page, size).subscribe({
      next: value => {
        this.pagination = value
        this.paginating = false
      },
      error: err => {
        console.log(err)
        this.paginating = false
      }
    })
  }

  delete() {
    this.service.deleteById(this.item.id).subscribe({
      next: value => {
        this.pagination.data.splice(this.currentIndex as number, 1)
        this.pagination.totalElements--
        this.item = undefined
        this.currentIndex = undefined
        this.deleteModel = false
      },
      error: err => {
        console.log(err)
      }
    })
  }






  public gettAllDeuxiemmeNiveau(){
    this.service2.findAll().subscribe({
      next:(data)=>{

      }
    })
  }


  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get pagination() {
    return this.service.pagination;
  }

  public set pagination(value) {
    this.service.pagination = value;
  }

  public get item(): NotificationRetardPremierNiveau {
    return this.service.item;
  }

  public set item(value: NotificationRetardPremierNiveau | undefined) {
    this.service.item = value;
  }

  public get generatePageNumbers() {
    return generatePageNumbers(this.pagination)
  }






}
