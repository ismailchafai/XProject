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
import {ValidatorResult} from "@bshg/validation";
import {TypeLocale38DetailService} from "src/app/controller/services/type-locale-3-8-detail.service";
import {TypeLocale38Detail} from "src/app/controller/entities/type-locale-3-8-detail";

@Component({
  selector: 'app-locale-3-8-detail-create',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective, NgTemplateOutlet,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, SpinnerComponent, IconDirective,
    FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent,
    
  ],
  templateUrl: './locale-3-8-detail-create.component.html',
  styleUrl: './locale-3-8-detail-create.component.scss'
})
export class Locale38DetailCreateComponent {
  protected sending = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Locale38Detail) {
    this.itemGetter = getter
    this.standAlon = false
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

  ngOnInit() {
    if(this.service.keepData) {
      let typeLocale38DetailCreated = this.typeLocale38DetailService.createdItemAfterReturn;
      if (typeLocale38DetailCreated.created) {
        this.item.typeLocale38Detail = typeLocale38DetailCreated.item
        this.validator.typeLocale38Detail.validate()
      }
    } else { this.reset(false) }
    this.service.keepData = false

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
        this.router.navigate(["/locale-3-8-detail"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
        this.validator.import(err.error as ValidatorResult< any>[])
      }
    })
  }

  reset(force = true) {
    if (force || this.item == null) this.item = new Locale38Detail()
    this.validator.reset()
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

  ////
}
