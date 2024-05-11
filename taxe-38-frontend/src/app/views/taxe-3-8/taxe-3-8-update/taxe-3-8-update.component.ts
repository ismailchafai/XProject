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
import {RedevableService} from "src/app/controller/services/redevable.service";
import {Redevable} from "src/app/controller/entities/redevable";
import {LocaleService} from "src/app/controller/services/locale.service";
import {Locale} from "src/app/controller/entities/locale";
import {TrimService} from "src/app/controller/services/trim.service";
import {Trim} from "src/app/controller/entities/trim";
import {Taxe38DetailService} from "src/app/controller/services/taxe-3-8-detail.service";
import {Taxe38Detail} from "src/app/controller/entities/taxe-3-8-detail";

@Component({
  selector: 'app-taxe-3-8-update',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent, NgTemplateOutlet,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, FormCheckComponent, SpinnerComponent,
    FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent, IconDirective,
    
  ],
  templateUrl: './taxe-3-8-update.component.html',
  styleUrl: './taxe-3-8-update.component.scss'
})
export class Taxe38UpdateComponent {
  protected isPartOfUpdateForm = false // true if it is used as part of other update component
  protected sending = false
  protected resetting = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Taxe38) {
    this.itemGetter = getter
    this.standAlon = false
    this.isPartOfUpdateForm = true
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

  ngAfterContentInit() {
    if (!this.isPartOfUpdateForm && this.item.id == null) this.router.navigate(["/taxe-3-8"]).then()
  }

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
    } else { this.validator.reset() }

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
  update() {
    console.log(this.item)
    if (!this.validator.validate()) return;
    this.sending = true;
    this.service.update().subscribe({
      next: data => {
        this.sending = false
        if (data == null) return
        this.router.navigate(["/taxe-3-8"]).then()
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



  public navigateToRedevableCreate() {
    this.redevableService.returnUrl = this.router.url
    this.router.navigate(['/redevable/create']).then()
  }
  public navigateToLocaleCreate() {
    this.localeService.returnUrl = this.router.url
    this.router.navigate(['/locale/create']).then()
  }
  public navigateToTrimCreate() {
    this.trimService.returnUrl = this.router.url
    this.router.navigate(['/trim/create']).then()
  }

  ////
}
