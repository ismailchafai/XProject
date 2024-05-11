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


import {NotificationRetardTroisiemeNiveauService} from "src/app/controller/services/notification-retard-troisieme-niveau.service";
import {NotificationRetardTroisiemeNiveau} from "src/app/controller/entities/notification-retard-troisieme-niveau";
import {NotificationRetardTroisiemeNiveauValidator} from "src/app/controller/validators/notification-retard-troisieme-niveau.validator";
import {ValidatorResult} from "@bshg/validation";
import {LocaleService} from "src/app/controller/services/locale.service";
import {Locale} from "src/app/controller/entities/locale";
import {RedevableService} from "src/app/controller/services/redevable.service";
import {Redevable} from "src/app/controller/entities/redevable";
import {TrimService} from "src/app/controller/services/trim.service";
import {Trim} from "src/app/controller/entities/trim";

@Component({
  selector: 'app-notification-retard-troisieme-niveau-create',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective, NgTemplateOutlet,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, SpinnerComponent, IconDirective,
    FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent,
    
  ],
  templateUrl: './notification-retard-troisieme-niveau-create.component.html',
  styleUrl: './notification-retard-troisieme-niveau-create.component.scss'
})
export class NotificationRetardTroisiemeNiveauCreateComponent {
  protected sending = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => NotificationRetardTroisiemeNiveau) {
    this.itemGetter = getter
    this.standAlon = false
  }
  @Input("setter") set setItemSetter(setter: (value: NotificationRetardTroisiemeNiveau | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: NotificationRetardTroisiemeNiveauValidator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(NotificationRetardTroisiemeNiveauService)
  private localeService = inject(LocaleService)
  private redevableService = inject(RedevableService)
  private trimService = inject(TrimService)

  protected validator = NotificationRetardTroisiemeNiveauValidator.init(() => this.item)

  protected localeList!: Locale[]
  protected redevableList!: Redevable[]
  protected trimList!: Trim[]

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
      let trimCreated = this.trimService.createdItemAfterReturn;
      if (trimCreated.created) {
        this.item.trim = trimCreated.item
        this.validator.trim.validate()
      }
    } else { this.reset(false) }
    this.service.keepData = false

    this.loadLocaleList()
    this.loadRedevableList()
    this.loadTrimList()
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
        this.router.navigate(["/notification-retard-troisieme-niveau"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
        this.validator.import(err.error as ValidatorResult< any>[])
      }
    })
  }

  reset(force = true) {
    if (force || this.item == null) this.item = new NotificationRetardTroisiemeNiveau()
    this.validator.reset()
  }

  // GETTERS AND SETTERS
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get item(): NotificationRetardTroisiemeNiveau {
    return this.itemGetter();
  }

  public set item(value: NotificationRetardTroisiemeNiveau | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): NotificationRetardTroisiemeNiveau {
    return this.service.item;
  }

  private itemSetter(value: NotificationRetardTroisiemeNiveau | undefined) {
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
  public navigateToTrimCreate() {
    this.trimService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/trim/create']).then()
  }

  ////
}
