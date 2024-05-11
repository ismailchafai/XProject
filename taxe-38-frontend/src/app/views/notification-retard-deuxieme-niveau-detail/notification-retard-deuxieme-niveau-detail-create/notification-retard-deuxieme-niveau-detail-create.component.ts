import { Component, inject, Input } from '@angular/core';
import {
  FormSelectDirective, ColComponent, FormControlDirective,
  FormFloatingDirective, FormLabelDirective, RowComponent,
  CardComponent, CardBodyComponent, CardHeaderComponent, SpinnerComponent,
  InputGroupComponent, ButtonDirective, NavComponent, NavItemComponent,
  FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent
} from "@coreui/angular";
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {IconDirective} from "@coreui/icons-angular";
import {NgTemplateOutlet} from "@angular/common";


import {NotificationRetardDeuxiemeNiveauDetailService} from "src/app/controller/services/notification-retard-deuxieme-niveau-detail.service";
import {NotificationRetardDeuxiemeNiveauDetail} from "src/app/controller/entities/notification-retard-deuxieme-niveau-detail";
import {NotificationRetardDeuxiemeNiveauDetailValidator} from "src/app/controller/validators/notification-retard-deuxieme-niveau-detail.validator";
import {ValidatorResult} from "@bshg/validation";
import {TrimService} from "src/app/controller/services/trim.service";
import {Trim} from "src/app/controller/entities/trim";

@Component({
  selector: 'app-notification-retard-deuxieme-niveau-detail-create',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective, NgTemplateOutlet,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, SpinnerComponent, IconDirective,
    FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent,
    
  ],
  templateUrl: './notification-retard-deuxieme-niveau-detail-create.component.html',
  styleUrl: './notification-retard-deuxieme-niveau-detail-create.component.scss'
})
export class NotificationRetardDeuxiemeNiveauDetailCreateComponent {
  protected sending = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => NotificationRetardDeuxiemeNiveauDetail) {
    this.itemGetter = getter
    this.standAlon = false
  }
  @Input("setter") set setItemSetter(setter: (value: NotificationRetardDeuxiemeNiveauDetail | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: NotificationRetardDeuxiemeNiveauDetailValidator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(NotificationRetardDeuxiemeNiveauDetailService)
  private trimService = inject(TrimService)

  protected validator = NotificationRetardDeuxiemeNiveauDetailValidator.init(() => this.item)

  protected trimList!: Trim[]

  ngOnInit() {
    if(this.service.keepData) {
      let trimCreated = this.trimService.createdItemAfterReturn;
      if (trimCreated.created) {
        this.item.trim = trimCreated.item
        this.validator.trim.validate()
      }
    } else { this.reset(false) }
    this.service.keepData = false

    this.loadTrimList()
  }

  // LOAD DATA
  loadTrimList() {
    this.trimService.findAllOptimized().subscribe({
      next: data => this.trimList = data,
      error: err => console.log(err)
    })
  }

  // METHODS
  create() {
    console.log(this.item)
    if (!this.validator.validate()) return;
    this.sending = true;
    this.service.create().subscribe({
      next: data => {
        this.sending = false
        if (data == null) return
        if (this.toReturn) {
          this.item = data
          this.router.navigate([this.returnUrl]).then()
          return;
        }
        this.item = undefined
        this.router.navigate(["/notification-retard-deuxieme-niveau-detail"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
        this.validator.import(err.error as ValidatorResult< any>[])
      }
    })
  }

  reset(force = true) {
    if (force || this.item == null) this.item = new NotificationRetardDeuxiemeNiveauDetail()
    this.validator.reset()
  }

  // GETTERS AND SETTERS
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get item(): NotificationRetardDeuxiemeNiveauDetail {
    return this.itemGetter();
  }

  public set item(value: NotificationRetardDeuxiemeNiveauDetail | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): NotificationRetardDeuxiemeNiveauDetail {
    return this.service.item;
  }

  private itemSetter(value: NotificationRetardDeuxiemeNiveauDetail | undefined) {
    this.service.item = value;
  }

  public get trim(): Trim {
    if (this.item.trim == null)
      this.item.trim = new Trim()
    return this.item.trim;
  }
  public set trim(value: Trim | undefined) {
    this.item.trim = value;
  }



  public get returnUrl() {
    return this.service.returnUrl;
  }

  public get toReturn() {
    return this.service.toReturn();
  }

  public navigateToTrimCreate() {
    this.trimService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/trim/create']).then()
  }

  ////
}
