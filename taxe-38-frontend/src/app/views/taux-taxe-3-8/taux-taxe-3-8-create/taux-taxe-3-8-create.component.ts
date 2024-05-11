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


import {TauxTaxe38Service} from "src/app/controller/services/taux-taxe-3-8.service";
import {TauxTaxe38} from "src/app/controller/entities/taux-taxe-3-8";
import {TauxTaxe38Validator} from "src/app/controller/validators/taux-taxe-3-8.validator";
import {ValidatorResult} from "@bshg/validation";
import {TypeLocale38DetailService} from "src/app/controller/services/type-locale-3-8-detail.service";
import {TypeLocale38Detail} from "src/app/controller/entities/type-locale-3-8-detail";
import {CategorieLocaleService} from "src/app/controller/services/categorie-locale.service";
import {CategorieLocale} from "src/app/controller/entities/categorie-locale";

@Component({
  selector: 'app-taux-taxe-3-8-create',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective, NgTemplateOutlet,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, SpinnerComponent, IconDirective,
    FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent,
    
  ],
  templateUrl: './taux-taxe-3-8-create.component.html',
  styleUrl: './taux-taxe-3-8-create.component.scss'
})
export class TauxTaxe38CreateComponent {
  protected sending = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => TauxTaxe38) {
    this.itemGetter = getter
    this.standAlon = false
  }
  @Input("setter") set setItemSetter(setter: (value: TauxTaxe38 | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: TauxTaxe38Validator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(TauxTaxe38Service)
  private typeLocale38DetailService = inject(TypeLocale38DetailService)
  private categorieLocaleService = inject(CategorieLocaleService)

  protected validator = TauxTaxe38Validator.init(() => this.item)

  protected typeLocale38DetailList!: TypeLocale38Detail[]
  protected categorieLocaleList!: CategorieLocale[]

  ngOnInit() {
    if(this.service.keepData) {
      let typeLocale38DetailCreated = this.typeLocale38DetailService.createdItemAfterReturn;
      if (typeLocale38DetailCreated.created) {
        this.item.typeLocale38Detail = typeLocale38DetailCreated.item
        this.validator.typeLocale38Detail.validate()
      }
      let categorieLocaleCreated = this.categorieLocaleService.createdItemAfterReturn;
      if (categorieLocaleCreated.created) {
        this.item.categorieLocale = categorieLocaleCreated.item
        this.validator.categorieLocale.validate()
      }
    } else { this.reset(false) }
    this.service.keepData = false

    this.loadTypeLocale38DetailList()
    this.loadCategorieLocaleList()
  }

  // LOAD DATA
  loadTypeLocale38DetailList() {
    this.typeLocale38DetailService.findAllOptimized().subscribe({
      next: data => this.typeLocale38DetailList = data,
      error: err => console.log(err)
    })
  }
  loadCategorieLocaleList() {
    this.categorieLocaleService.findAllOptimized().subscribe({
      next: data => this.categorieLocaleList = data,
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
        this.router.navigate(["/taux-taxe-3-8"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
        this.validator.import(err.error as ValidatorResult< any>[])
      }
    })
  }

  reset(force = true) {
    if (force || this.item == null) this.item = new TauxTaxe38()
    this.validator.reset()
  }

  // GETTERS AND SETTERS
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get item(): TauxTaxe38 {
    return this.itemGetter();
  }

  public set item(value: TauxTaxe38 | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): TauxTaxe38 {
    return this.service.item;
  }

  private itemSetter(value: TauxTaxe38 | undefined) {
    this.service.item = value;
  }

  public get typeLocale38Detail(): TypeLocale38Detail {
    if (this.item.typeLocale38Detail == null)
      this.item.typeLocale38Detail = new TypeLocale38Detail()
    return this.item.typeLocale38Detail;
  }
  public set typeLocale38Detail(value: TypeLocale38Detail | undefined) {
    this.item.typeLocale38Detail = value;
  }


  public get categorieLocale(): CategorieLocale {
    if (this.item.categorieLocale == null)
      this.item.categorieLocale = new CategorieLocale()
    return this.item.categorieLocale;
  }
  public set categorieLocale(value: CategorieLocale | undefined) {
    this.item.categorieLocale = value;
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
  public navigateToCategorieLocaleCreate() {
    this.categorieLocaleService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/categorie-locale/create']).then()
  }

  ////
}
