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

@Component({
  selector: 'app-type-locale-3-8-detail-update',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent, NgTemplateOutlet,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, FormCheckComponent, SpinnerComponent,
    FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent, IconDirective,
    
  ],
  templateUrl: './type-locale-3-8-detail-update.component.html',
  styleUrl: './type-locale-3-8-detail-update.component.scss'
})
export class TypeLocale38DetailUpdateComponent {
  protected isPartOfUpdateForm = false // true if it is used as part of other update component
  protected sending = false
  protected resetting = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => TypeLocale38Detail) {
    this.itemGetter = getter
    this.standAlon = false
    this.isPartOfUpdateForm = true
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


  ngAfterContentInit() {
    if (!this.isPartOfUpdateForm && this.item.id == null) this.router.navigate(["/type-locale-3-8-detail"]).then()
  }

  ngOnInit() {
    if(this.service.keepData) {
    } else { this.validator.reset() }

  }

  // LOAD DATA

  // METHODS
  update() {
    console.log(this.item)
    if (!this.validator.validate()) return;
    this.sending = true;
    this.service.update().subscribe({
      next: data => {
        this.sending = false
        if (data == null) return
        this.router.navigate(["/type-locale-3-8-detail"]).then()
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



  ////
}
