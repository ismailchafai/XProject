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


import {LocaleService} from "src/app/controller/services/locale.service";
import {Locale} from "src/app/controller/entities/locale";
import {LocaleValidator} from "src/app/controller/validators/locale.validator";
import {ValidatorResult} from "@bshg/validation";
import {RueService} from "src/app/controller/services/rue.service";
import {Rue} from "src/app/controller/entities/rue";
import {RedevableService} from "src/app/controller/services/redevable.service";
import {Redevable} from "src/app/controller/entities/redevable";
import {CategorieLocaleService} from "src/app/controller/services/categorie-locale.service";
import {CategorieLocale} from "src/app/controller/entities/categorie-locale";

@Component({
  selector: 'app-locale-create',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective, NgTemplateOutlet,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, SpinnerComponent, IconDirective,
    FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent,
    
  ],
  templateUrl: './locale-create.component.html',
  styleUrl: './locale-create.component.scss'
})
export class LocaleCreateComponent {
  protected sending = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Locale) {
    this.itemGetter = getter
    this.standAlon = false
  }
  @Input("setter") set setItemSetter(setter: (value: Locale | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: LocaleValidator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(LocaleService)
  private rueService = inject(RueService)
  private redevableService = inject(RedevableService)
  private categorieLocaleService = inject(CategorieLocaleService)

  protected validator = LocaleValidator.init(() => this.item)

  protected rueList!: Rue[]
  protected redevableList!: Redevable[]
  protected categorieLocaleList!: CategorieLocale[]

  ngOnInit() {
    if(this.service.keepData) {
      let rueCreated = this.rueService.createdItemAfterReturn;
      if (rueCreated.created) {
        this.item.rue = rueCreated.item
        this.validator.rue.validate()
      }
      let redevableCreated = this.redevableService.createdItemAfterReturn;
      if (redevableCreated.created) {
        this.item.redevable = redevableCreated.item
        this.validator.redevable.validate()
      }
      let categorieLocaleCreated = this.categorieLocaleService.createdItemAfterReturn;
      if (categorieLocaleCreated.created) {
        this.item.categorieLocale = categorieLocaleCreated.item
        this.validator.categorieLocale.validate()
      }
    } else { this.reset(false) }
    this.service.keepData = false

    this.loadRueList()
    this.loadRedevableList()
    this.loadCategorieLocaleList()
  }

  // LOAD DATA
  loadRueList() {
    this.rueService.findAllOptimized().subscribe({
      next: data => this.rueList = data,
      error: err => console.log(err)
    })
  }
  loadRedevableList() {
    this.redevableService.findAllOptimized().subscribe({
      next: data => this.redevableList = data,
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
        this.router.navigate(["/locale"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
        this.validator.import(err.error as ValidatorResult< any>[])
      }
    })
  }

  reset(force = true) {
    if (force || this.item == null) this.item = new Locale()
    this.validator.reset()
  }

  // GETTERS AND SETTERS
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get item(): Locale {
    return this.itemGetter();
  }

  public set item(value: Locale | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): Locale {
    return this.service.item;
  }

  private itemSetter(value: Locale | undefined) {
    this.service.item = value;
  }

  public get rue(): Rue {
    if (this.item.rue == null)
      this.item.rue = new Rue()
    return this.item.rue;
  }
  public set rue(value: Rue | undefined) {
    this.item.rue = value;
  }


  public get redevable(): Redevable {
    if (this.item.redevable == null)
      this.item.redevable = new Redevable()
    return this.item.redevable;
  }
  public set redevable(value: Redevable | undefined) {
    this.item.redevable = value;
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

  public navigateToRueCreate() {
    this.rueService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/rue/create']).then()
  }
  public navigateToRedevableCreate() {
    this.redevableService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/redevable/create']).then()
  }
  public navigateToCategorieLocaleCreate() {
    this.categorieLocaleService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/categorie-locale/create']).then()
  }

  ////
}
