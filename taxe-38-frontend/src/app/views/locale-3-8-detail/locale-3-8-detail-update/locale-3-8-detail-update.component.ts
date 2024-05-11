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


import {Locale38DetailService} from "src/app/controller/services/locale-3-8-detail.service";
import {Locale38Detail} from "src/app/controller/entities/locale-3-8-detail";
import {Locale38DetailValidator} from "src/app/controller/validators/locale-3-8-detail.validator";
import {TypeLocale38DetailService} from "src/app/controller/services/type-locale-3-8-detail.service";
import {TypeLocale38Detail} from "src/app/controller/entities/type-locale-3-8-detail";

@Component({
  selector: 'app-locale-3-8-detail-update',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent, NgTemplateOutlet,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, FormCheckComponent, SpinnerComponent,
    FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent, IconDirective,
    
  ],
  templateUrl: './locale-3-8-detail-update.component.html',
  styleUrl: './locale-3-8-detail-update.component.scss'
})
export class Locale38DetailUpdateComponent {
  protected isPartOfUpdateForm = false // true if it is used as part of other update component
  protected sending = false
  protected resetting = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Locale38Detail) {
    this.itemGetter = getter
    this.standAlon = false
    this.isPartOfUpdateForm = true
  }
  @Input("setter") set setItemSetter(setter: (value: Locale38Detail | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: Locale38DetailValidator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(Locale38DetailService)
  private typeLocale38DetailService = inject(TypeLocale38DetailService)

  protected validator = Locale38DetailValidator.init(() => this.item)

  protected typeLocale38DetailList!: TypeLocale38Detail[]

  ngAfterContentInit() {
    if (!this.isPartOfUpdateForm && this.item.id == null) this.router.navigate(["/locale-3-8-detail"]).then()
  }

  ngOnInit() {
    if(this.service.keepData) {
      let typeLocale38DetailCreated = this.typeLocale38DetailService.createdItemAfterReturn;
      if (typeLocale38DetailCreated.created) {
        this.item.typeLocale38Detail = typeLocale38DetailCreated.item
        this.validator.typeLocale38Detail.validate()
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
        this.router.navigate(["/locale-3-8-detail"]).then()
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

  public get item(): Locale38Detail {
    return this.itemGetter();
  }

  public set item(value: Locale38Detail | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): Locale38Detail {
    return this.service.item;
  }

  private itemSetter(value: Locale38Detail | undefined) {
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



  public navigateToTypeLocale38DetailCreate() {
    this.typeLocale38DetailService.returnUrl = this.router.url
    this.router.navigate(['/type-locale-3-8-detail/create']).then()
  }

  ////
}
