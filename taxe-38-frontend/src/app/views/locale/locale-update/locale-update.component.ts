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
import {RueService} from "src/app/controller/services/rue.service";
import {Rue} from "src/app/controller/entities/rue";
import {RedevableService} from "src/app/controller/services/redevable.service";
import {Redevable} from "src/app/controller/entities/redevable";
import {CategorieLocaleService} from "src/app/controller/services/categorie-locale.service";
import {CategorieLocale} from "src/app/controller/entities/categorie-locale";

@Component({
  selector: 'app-locale-update',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent, NgTemplateOutlet,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, FormCheckComponent, SpinnerComponent,
    FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent, IconDirective,
    
  ],
  templateUrl: './locale-update.component.html',
  styleUrl: './locale-update.component.scss'
})
export class LocaleUpdateComponent {
  protected isPartOfUpdateForm = false // true if it is used as part of other update component
  protected sending = false
  protected resetting = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Locale) {
    this.itemGetter = getter
    this.standAlon = false
    this.isPartOfUpdateForm = true
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

  ngAfterContentInit() {
    if (!this.isPartOfUpdateForm && this.item.id == null) this.router.navigate(["/locale"]).then()
  }

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
    } else { this.validator.reset() }

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
  update() {
    console.log(this.item)
    if (!this.validator.validate()) return;
    this.sending = true;
    this.service.update().subscribe({
      next: data => {
        this.sending = false
        if (data == null) return
        this.router.navigate(["/locale"]).then()
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



  public navigateToRueCreate() {
    this.rueService.returnUrl = this.router.url
    this.router.navigate(['/rue/create']).then()
  }
  public navigateToRedevableCreate() {
    this.redevableService.returnUrl = this.router.url
    this.router.navigate(['/redevable/create']).then()
  }
  public navigateToCategorieLocaleCreate() {
    this.categorieLocaleService.returnUrl = this.router.url
    this.router.navigate(['/categorie-locale/create']).then()
  }

  ////
}
