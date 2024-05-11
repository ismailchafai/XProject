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


import {Taxe38Service} from "src/app/controller/services/taxe-3-8.service";
import {Taxe38} from "src/app/controller/entities/taxe-3-8";
import {Taxe38Validator} from "src/app/controller/validators/taxe-3-8.validator";
import {ValidatorResult} from "@bshg/validation";
import {RedevableService} from "src/app/controller/services/redevable.service";
import {Redevable} from "src/app/controller/entities/redevable";
import {LocaleService} from "src/app/controller/services/locale.service";
import {Locale} from "src/app/controller/entities/locale";
import {TrimService} from "src/app/controller/services/trim.service";
import {Trim} from "src/app/controller/entities/trim";
import {Taxe38DetailService} from "src/app/controller/services/taxe-3-8-detail.service";
import {Taxe38Detail} from "src/app/controller/entities/taxe-3-8-detail";

@Component({
  selector: 'app-taxe-3-8-create',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective, NgTemplateOutlet,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, SpinnerComponent, IconDirective,
    FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent,

  ],
  templateUrl: './taxe-3-8-create.component.html',
  styleUrl: './taxe-3-8-create.component.scss'
})
export class Taxe38CreateComponent {
  protected sending = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Taxe38) {
    this.itemGetter = getter
    this.standAlon = false
  }
  @Input("setter") set setItemSetter(setter: (value: Taxe38 | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: Taxe38Validator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(Taxe38Service)
  private redevableService = inject(RedevableService)
  private localeService = inject(LocaleService)
  private trimService = inject(TrimService)

  protected validator = Taxe38Validator.init(() => this.item)

  protected redevableList!: Redevable[]
  protected localeList!: Locale[]
  protected trimList!: Trim[]

  ngOnInit() {
    if(this.service.keepData) {
      let redevableCreated = this.redevableService.createdItemAfterReturn;
      if (redevableCreated.created) {
        this.item.redevable = redevableCreated.item
        this.validator.redevable.validate()
      }
      let localeCreated = this.localeService.createdItemAfterReturn;
      if (localeCreated.created) {
        this.item.locale = localeCreated.item
        this.validator.locale.validate()
      }
      let trimCreated = this.trimService.createdItemAfterReturn;
      if (trimCreated.created) {
        this.item.trim = trimCreated.item
        this.validator.trim.validate()
      }
    } else { this.reset(false) }
    this.service.keepData = false

    this.loadRedevableList()
    this.loadLocaleList()
    this.loadTrimList()
  }

  // LOAD DATA
  loadRedevableList() {
    this.redevableService.findAllOptimized().subscribe({
      next: data => this.redevableList = data,
      error: err => console.log(err)
    })
  }
  loadLocaleList() {
    this.localeService.findAllOptimized().subscribe({
      next: data => this.localeList = data,
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
    this.item.montantBase=0;
    this.item.montantTotal=0;
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
        this.router.navigate(["/taxe-3-8"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
        this.validator.import(err.error as ValidatorResult< any>[])
      }
    })
  }

  reset(force = true) {
    if (force || this.item == null) this.item = new Taxe38()
    this.validator.reset()
  }

  // GETTERS AND SETTERS
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get item(): Taxe38 {
    return this.itemGetter();
  }

  public set item(value: Taxe38 | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): Taxe38 {
    return this.service.item;
  }

  private itemSetter(value: Taxe38 | undefined) {
    this.service.item = value;
  }

  public get redevable(): Redevable {
    if (this.item.redevable == null)
      this.item.redevable = new Redevable()
    return this.item.redevable;
  }
  public set redevable(value: Redevable | undefined) {
    this.item.redevable = value;
  }


  public get locale(): Locale {
    if (this.item.locale == null)
      this.item.locale = new Locale()
    return this.item.locale;
  }
  public set locale(value: Locale | undefined) {
    this.item.locale = value;
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

  public navigateToRedevableCreate() {
    this.redevableService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/redevable/create']).then()
  }
  public navigateToLocaleCreate() {
    this.localeService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/locale/create']).then()
  }
  public navigateToTrimCreate() {
    this.trimService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/trim/create']).then()
  }

  ////
}
