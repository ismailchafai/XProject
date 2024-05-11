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


import {TypeLocale38DetailService} from "src/app/controller/services/type-locale-3-8-detail.service";
import {TypeLocale38Detail} from "src/app/controller/entities/type-locale-3-8-detail";
import {TypeLocale38DetailValidator} from "src/app/controller/validators/type-locale-3-8-detail.validator";
import {ValidatorResult} from "@bshg/validation";

@Component({
  selector: 'app-type-locale-3-8-detail-create',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective, NgTemplateOutlet,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, SpinnerComponent, IconDirective,
    FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent,
    
  ],
  templateUrl: './type-locale-3-8-detail-create.component.html',
  styleUrl: './type-locale-3-8-detail-create.component.scss'
})
export class TypeLocale38DetailCreateComponent {
  protected sending = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => TypeLocale38Detail) {
    this.itemGetter = getter
    this.standAlon = false
  }
  @Input("setter") set setItemSetter(setter: (value: TypeLocale38Detail | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: TypeLocale38DetailValidator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(TypeLocale38DetailService)

  protected validator = TypeLocale38DetailValidator.init(() => this.item)


  ngOnInit() {
    if(this.service.keepData) {
    } else { this.reset(false) }
    this.service.keepData = false

  }

  // LOAD DATA

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
        this.router.navigate(["/type-locale-3-8-detail"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
        this.validator.import(err.error as ValidatorResult< any>[])
      }
    })
  }

  reset(force = true) {
    if (force || this.item == null) this.item = new TypeLocale38Detail()
    this.validator.reset()
  }

  // GETTERS AND SETTERS
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get item(): TypeLocale38Detail {
    return this.itemGetter();
  }

  public set item(value: TypeLocale38Detail | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): TypeLocale38Detail {
    return this.service.item;
  }

  private itemSetter(value: TypeLocale38Detail | undefined) {
    this.service.item = value;
  }


  public get returnUrl() {
    return this.service.returnUrl;
  }

  public get toReturn() {
    return this.service.toReturn();
  }


  ////
}
