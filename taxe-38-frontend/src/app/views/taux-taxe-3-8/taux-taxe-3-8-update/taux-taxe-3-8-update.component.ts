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
import {TypeLocale38DetailService} from "src/app/controller/services/type-locale-3-8-detail.service";
import {TypeLocale38Detail} from "src/app/controller/entities/type-locale-3-8-detail";
import {CategorieLocaleService} from "src/app/controller/services/categorie-locale.service";
import {CategorieLocale} from "src/app/controller/entities/categorie-locale";

@Component({
  selector: 'app-taux-taxe-3-8-update',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent, NgTemplateOutlet,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, FormCheckComponent, SpinnerComponent,
    FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent, IconDirective,
    
  ],
  templateUrl: './taux-taxe-3-8-update.component.html',
  styleUrl: './taux-taxe-3-8-update.component.scss'
})
export class TauxTaxe38UpdateComponent {
  protected isPartOfUpdateForm = false // true if it is used as part of other update component
  protected sending = false
  protected resetting = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => TauxTaxe38) {
    this.itemGetter = getter
    this.standAlon = false
    this.isPartOfUpdateForm = true
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

  ngAfterContentInit() {
    if (!this.isPartOfUpdateForm && this.item.id == null) this.router.navigate(["/taux-taxe-3-8"]).then()
  }

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
    } else { this.validator.reset() }

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
  update() {
    console.log(this.item)
    if (!this.validator.validate()) return;
    this.sending = true;
    this.service.update().subscribe({
      next: data => {
        this.sending = false
        if (data == null) return
        this.router.navigate(["/taux-taxe-3-8"]).then()
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



  public navigateToTypeLocale38DetailCreate() {
    this.typeLocale38DetailService.returnUrl = this.router.url
    this.router.navigate(['/type-locale-3-8-detail/create']).then()
  }
  public navigateToCategorieLocaleCreate() {
    this.categorieLocaleService.returnUrl = this.router.url
    this.router.navigate(['/categorie-locale/create']).then()
  }

  ////
}
