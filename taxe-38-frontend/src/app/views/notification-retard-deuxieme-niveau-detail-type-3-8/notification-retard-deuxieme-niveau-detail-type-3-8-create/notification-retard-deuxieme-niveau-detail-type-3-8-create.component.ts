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


import {NotificationRetardDeuxiemeNiveauDetailType38Service} from "src/app/controller/services/notification-retard-deuxieme-niveau-detail-type-3-8.service";
import {NotificationRetardDeuxiemeNiveauDetailType38} from "src/app/controller/entities/notification-retard-deuxieme-niveau-detail-type-3-8";
import {NotificationRetardDeuxiemeNiveauDetailType38Validator} from "src/app/controller/validators/notification-retard-deuxieme-niveau-detail-type-3-8.validator";
import {ValidatorResult} from "@bshg/validation";
import {TypeLocale38DetailService} from "src/app/controller/services/type-locale-3-8-detail.service";
import {TypeLocale38Detail} from "src/app/controller/entities/type-locale-3-8-detail";

@Component({
  selector: 'app-notification-retard-deuxieme-niveau-detail-type-3-8-create',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective, NgTemplateOutlet,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, SpinnerComponent, IconDirective,
    FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent,
    
  ],
  templateUrl: './notification-retard-deuxieme-niveau-detail-type-3-8-create.component.html',
  styleUrl: './notification-retard-deuxieme-niveau-detail-type-3-8-create.component.scss'
})
export class NotificationRetardDeuxiemeNiveauDetailType38CreateComponent {
  protected sending = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => NotificationRetardDeuxiemeNiveauDetailType38) {
    this.itemGetter = getter
    this.standAlon = false
  }
  @Input("setter") set setItemSetter(setter: (value: NotificationRetardDeuxiemeNiveauDetailType38 | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: NotificationRetardDeuxiemeNiveauDetailType38Validator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(NotificationRetardDeuxiemeNiveauDetailType38Service)
  private typeLocale38DetailService = inject(TypeLocale38DetailService)

  protected validator = NotificationRetardDeuxiemeNiveauDetailType38Validator.init(() => this.item)

  protected typeLocale38DetailList!: TypeLocale38Detail[]

  ngOnInit() {
    if(this.service.keepData) {
      let typeLocale38Created = this.typeLocale38DetailService.createdItemAfterReturn;
      if (typeLocale38Created.created) {
        this.item.typeLocale38 = typeLocale38Created.item
        this.validator.typeLocale38.validate()
      }
    } else { this.reset(false) }
    this.service.keepData = false

    this.loadTypeLocale38DetailList()
  }

  // LOAD DATA
  loadTypeLocale38DetailList() {
    this.typeLocale38DetailService.findAllOptimized().subscribe({
      next: data => this.typeLocale38DetailList = data,
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
        this.router.navigate(["/notification-retard-deuxieme-niveau-detail-type-3-8"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
        this.validator.import(err.error as ValidatorResult< any>[])
      }
    })
  }

  reset(force = true) {
    if (force || this.item == null) this.item = new NotificationRetardDeuxiemeNiveauDetailType38()
    this.validator.reset()
  }

  // GETTERS AND SETTERS
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get item(): NotificationRetardDeuxiemeNiveauDetailType38 {
    return this.itemGetter();
  }

  public set item(value: NotificationRetardDeuxiemeNiveauDetailType38 | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): NotificationRetardDeuxiemeNiveauDetailType38 {
    return this.service.item;
  }

  private itemSetter(value: NotificationRetardDeuxiemeNiveauDetailType38 | undefined) {
    this.service.item = value;
  }

  public get typeLocale38(): TypeLocale38Detail {
    if (this.item.typeLocale38 == null)
      this.item.typeLocale38 = new TypeLocale38Detail()
    return this.item.typeLocale38;
  }
  public set typeLocale38(value: TypeLocale38Detail | undefined) {
    this.item.typeLocale38 = value;
  }



  public get returnUrl() {
    return this.service.returnUrl;
  }

  public get toReturn() {
    return this.service.toReturn();
  }

  public navigateToTypeLocale38DetailCreate() {
    this.typeLocale38DetailService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/type-locale-3-8-detail/create']).then()
  }

  ////
}
