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


import {NotificationRetardDeuxiemeNiveauService} from "src/app/controller/services/notification-retard-deuxieme-niveau.service";
import {NotificationRetardDeuxiemeNiveau} from "src/app/controller/entities/notification-retard-deuxieme-niveau";
import {NotificationRetardDeuxiemeNiveauValidator} from "src/app/controller/validators/notification-retard-deuxieme-niveau.validator";
import {ValidatorResult} from "@bshg/validation";
import {LocaleService} from "src/app/controller/services/locale.service";
import {Locale} from "src/app/controller/entities/locale";
import {RedevableService} from "src/app/controller/services/redevable.service";
import {Redevable} from "src/app/controller/entities/redevable";

@Component({
  selector: 'app-notification-retard-deuxieme-niveau-create',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective, NgTemplateOutlet,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, SpinnerComponent, IconDirective,
    FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent,
    
  ],
  templateUrl: './notification-retard-deuxieme-niveau-create.component.html',
  styleUrl: './notification-retard-deuxieme-niveau-create.component.scss'
})
export class NotificationRetardDeuxiemeNiveauCreateComponent {
  protected sending = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => NotificationRetardDeuxiemeNiveau) {
    this.itemGetter = getter
    this.standAlon = false
  }
  @Input("setter") set setItemSetter(setter: (value: NotificationRetardDeuxiemeNiveau | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: NotificationRetardDeuxiemeNiveauValidator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(NotificationRetardDeuxiemeNiveauService)
  private localeService = inject(LocaleService)
  private redevableService = inject(RedevableService)

  protected validator = NotificationRetardDeuxiemeNiveauValidator.init(() => this.item)

  protected localeList!: Locale[]
  protected redevableList!: Redevable[]

  ngOnInit() {
    if(this.service.keepData) {
      let localeCreated = this.localeService.createdItemAfterReturn;
      if (localeCreated.created) {
        this.item.locale = localeCreated.item
        this.validator.locale.validate()
      }
      let redevableCreated = this.redevableService.createdItemAfterReturn;
      if (redevableCreated.created) {
        this.item.redevable = redevableCreated.item
        this.validator.redevable.validate()
      }
    } else { this.reset(false) }
    this.service.keepData = false

    this.loadLocaleList()
    this.loadRedevableList()
  }

  // LOAD DATA
  loadLocaleList() {
    this.localeService.findAllOptimized().subscribe({
      next: data => this.localeList = data,
      error: err => console.log(err)
    })
  }
  loadRedevableList() {
    this.redevableService.findAllOptimized().subscribe({
      next: data => this.redevableList = data,
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
        this.router.navigate(["/notification-retard-deuxieme-niveau"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
        this.validator.import(err.error as ValidatorResult< any>[])
      }
    })
  }

  reset(force = true) {
    if (force || this.item == null) this.item = new NotificationRetardDeuxiemeNiveau()
    this.validator.reset()
  }

  // GETTERS AND SETTERS
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get item(): NotificationRetardDeuxiemeNiveau {
    return this.itemGetter();
  }

  public set item(value: NotificationRetardDeuxiemeNiveau | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): NotificationRetardDeuxiemeNiveau {
    return this.service.item;
  }

  private itemSetter(value: NotificationRetardDeuxiemeNiveau | undefined) {
    this.service.item = value;
  }

  public get locale(): Locale {
    if (this.item.locale == null)
      this.item.locale = new Locale()
    return this.item.locale;
  }
  public set locale(value: Locale | undefined) {
    this.item.locale = value;
  }


  public get redevable(): Redevable {
    if (this.item.redevable == null)
      this.item.redevable = new Redevable()
    return this.item.redevable;
  }
  public set redevable(value: Redevable | undefined) {
    this.item.redevable = value;
  }



  public get returnUrl() {
    return this.service.returnUrl;
  }

  public get toReturn() {
    return this.service.toReturn();
  }

  public navigateToLocaleCreate() {
    this.localeService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/locale/create']).then()
  }
  public navigateToRedevableCreate() {
    this.redevableService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/redevable/create']).then()
  }

  ////
}
