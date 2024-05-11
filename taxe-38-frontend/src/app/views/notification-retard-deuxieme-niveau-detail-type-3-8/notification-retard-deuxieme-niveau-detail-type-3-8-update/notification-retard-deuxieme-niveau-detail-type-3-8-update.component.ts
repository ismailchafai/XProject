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
import {TypeLocale38DetailService} from "src/app/controller/services/type-locale-3-8-detail.service";
import {TypeLocale38Detail} from "src/app/controller/entities/type-locale-3-8-detail";

@Component({
  selector: 'app-notification-retard-deuxieme-niveau-detail-type-3-8-update',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent, NgTemplateOutlet,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, FormCheckComponent, SpinnerComponent,
    FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent, IconDirective,
    
  ],
  templateUrl: './notification-retard-deuxieme-niveau-detail-type-3-8-update.component.html',
  styleUrl: './notification-retard-deuxieme-niveau-detail-type-3-8-update.component.scss'
})
export class NotificationRetardDeuxiemeNiveauDetailType38UpdateComponent {
  protected isPartOfUpdateForm = false // true if it is used as part of other update component
  protected sending = false
  protected resetting = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => NotificationRetardDeuxiemeNiveauDetailType38) {
    this.itemGetter = getter
    this.standAlon = false
    this.isPartOfUpdateForm = true
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

  ngAfterContentInit() {
    if (!this.isPartOfUpdateForm && this.item.id == null) this.router.navigate(["/notification-retard-deuxieme-niveau-detail-type-3-8"]).then()
  }

  ngOnInit() {
    if(this.service.keepData) {
      let typeLocale38Created = this.typeLocale38DetailService.createdItemAfterReturn;
      if (typeLocale38Created.created) {
        this.item.typeLocale38 = typeLocale38Created.item
        this.validator.typeLocale38.validate()
      }
    } else { this.validator.reset() }

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
  update() {
    console.log(this.item)
    if (!this.validator.validate()) return;
    this.sending = true;
    this.service.update().subscribe({
      next: data => {
        this.sending = false
        if (data == null) return
        this.router.navigate(["/notification-retard-deuxieme-niveau-detail-type-3-8"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
      }
    })
  }

  reset() {
    this.resetting = true
    this.service.findById(this.item.id).subscribe({
      next: value => {
        this.item = value
        this.validator.reset()
        this.resetting = false
      },
      error: err => {
        console.log(err)
        this.resetting = false
      }
    })
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



  public navigateToTypeLocale38DetailCreate() {
    this.typeLocale38DetailService.returnUrl = this.router.url
    this.router.navigate(['/type-locale-3-8-detail/create']).then()
  }

  ////
}
