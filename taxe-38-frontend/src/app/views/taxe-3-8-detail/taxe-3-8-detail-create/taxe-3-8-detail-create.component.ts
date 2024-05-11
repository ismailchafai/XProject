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


import {Taxe38DetailService} from "src/app/controller/services/taxe-3-8-detail.service";
import {Taxe38Detail} from "src/app/controller/entities/taxe-3-8-detail";
import {Taxe38DetailValidator} from "src/app/controller/validators/taxe-3-8-detail.validator";
import {ValidatorResult} from "@bshg/validation";
import {Locale38DetailService} from "src/app/controller/services/locale-3-8-detail.service";
import {Locale38Detail} from "src/app/controller/entities/locale-3-8-detail";
import {TauxTaxe38Service} from "src/app/controller/services/taux-taxe-3-8.service";
import {TauxTaxe38} from "src/app/controller/entities/taux-taxe-3-8";
import {Taxe38Service} from "src/app/controller/services/taxe-3-8.service";
import {Taxe38} from "src/app/controller/entities/taxe-3-8";

@Component({
  selector: 'app-taxe-3-8-detail-create',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective, NgTemplateOutlet,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, SpinnerComponent, IconDirective,
    FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent,
    
  ],
  templateUrl: './taxe-3-8-detail-create.component.html',
  styleUrl: './taxe-3-8-detail-create.component.scss'
})
export class Taxe38DetailCreateComponent {
  protected sending = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Taxe38Detail) {
    this.itemGetter = getter
    this.standAlon = false
  }
  @Input("setter") set setItemSetter(setter: (value: Taxe38Detail | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: Taxe38DetailValidator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(Taxe38DetailService)
  private locale38DetailService = inject(Locale38DetailService)
  private tauxTaxe38Service = inject(TauxTaxe38Service)
  private taxe38Service = inject(Taxe38Service)

  protected validator = Taxe38DetailValidator.init(() => this.item)

  protected locale38DetailList!: Locale38Detail[]
  protected tauxTaxe38List!: TauxTaxe38[]
  protected taxe38List!: Taxe38[]

  ngOnInit() {
    if(this.service.keepData) {
      let locale38DetailCreated = this.locale38DetailService.createdItemAfterReturn;
      if (locale38DetailCreated.created) {
        this.item.locale38Detail = locale38DetailCreated.item
        this.validator.locale38Detail.validate()
      }
      let tauxTaxe38Created = this.tauxTaxe38Service.createdItemAfterReturn;
      if (tauxTaxe38Created.created) {
        this.item.tauxTaxe38 = tauxTaxe38Created.item
        this.validator.tauxTaxe38.validate()
      }
      let taxe38Created = this.taxe38Service.createdItemAfterReturn;
      if (taxe38Created.created) {
        this.item.taxe38 = taxe38Created.item
        this.validator.taxe38.validate()
      }
    } else { this.reset(false) }
    this.service.keepData = false

    this.loadLocale38DetailList()
    this.loadTauxTaxe38List()
    this.loadTaxe38List()
  }

  // LOAD DATA
  loadLocale38DetailList() {
    this.locale38DetailService.findAllOptimized().subscribe({
      next: data => this.locale38DetailList = data,
      error: err => console.log(err)
    })
  }
  loadTauxTaxe38List() {
    this.tauxTaxe38Service.findAllOptimized().subscribe({
      next: data => this.tauxTaxe38List = data,
      error: err => console.log(err)
    })
  }
  loadTaxe38List() {
    this.taxe38Service.findAllOptimized().subscribe({
      next: data => this.taxe38List = data,
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
        this.router.navigate(["/taxe-3-8-detail"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
        this.validator.import(err.error as ValidatorResult< any>[])
      }
    })
  }

  reset(force = true) {
    if (force || this.item == null) this.item = new Taxe38Detail()
    this.validator.reset()
  }

  // GETTERS AND SETTERS
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get item(): Taxe38Detail {
    return this.itemGetter();
  }

  public set item(value: Taxe38Detail | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): Taxe38Detail {
    return this.service.item;
  }

  private itemSetter(value: Taxe38Detail | undefined) {
    this.service.item = value;
  }

  public get locale38Detail(): Locale38Detail {
    if (this.item.locale38Detail == null)
      this.item.locale38Detail = new Locale38Detail()
    return this.item.locale38Detail;
  }
  public set locale38Detail(value: Locale38Detail | undefined) {
    this.item.locale38Detail = value;
  }


  public get tauxTaxe38(): TauxTaxe38 {
    if (this.item.tauxTaxe38 == null)
      this.item.tauxTaxe38 = new TauxTaxe38()
    return this.item.tauxTaxe38;
  }
  public set tauxTaxe38(value: TauxTaxe38 | undefined) {
    this.item.tauxTaxe38 = value;
  }


  public get taxe38(): Taxe38 {
    if (this.item.taxe38 == null)
      this.item.taxe38 = new Taxe38()
    return this.item.taxe38;
  }
  public set taxe38(value: Taxe38 | undefined) {
    this.item.taxe38 = value;
  }



  public get returnUrl() {
    return this.service.returnUrl;
  }

  public get toReturn() {
    return this.service.toReturn();
  }

  public navigateToLocale38DetailCreate() {
    this.locale38DetailService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/locale-3-8-detail/create']).then()
  }
  public navigateToTauxTaxe38Create() {
    this.tauxTaxe38Service.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/taux-taxe-3-8/create']).then()
  }
  public navigateToTaxe38Create() {
    this.taxe38Service.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/taxe-3-8/create']).then()
  }

  ////
}
