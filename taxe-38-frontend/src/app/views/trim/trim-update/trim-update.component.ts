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


import {TrimService} from "src/app/controller/services/trim.service";
import {Trim} from "src/app/controller/entities/trim";
import {TrimValidator} from "src/app/controller/validators/trim.validator";

@Component({
  selector: 'app-trim-update',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent, NgTemplateOutlet,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, FormCheckComponent, SpinnerComponent,
    FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent, IconDirective,
    
  ],
  templateUrl: './trim-update.component.html',
  styleUrl: './trim-update.component.scss'
})
export class TrimUpdateComponent {
  protected isPartOfUpdateForm = false // true if it is used as part of other update component
  protected sending = false
  protected resetting = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Trim) {
    this.itemGetter = getter
    this.standAlon = false
    this.isPartOfUpdateForm = true
  }
  @Input("setter") set setItemSetter(setter: (value: Trim | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: TrimValidator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(TrimService)

  protected validator = TrimValidator.init(() => this.item)


  ngAfterContentInit() {
    if (!this.isPartOfUpdateForm && this.item.id == null) this.router.navigate(["/trim"]).then()
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
        this.router.navigate(["/trim"]).then()
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

  public get item(): Trim {
    return this.itemGetter();
  }

  public set item(value: Trim | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): Trim {
    return this.service.item;
  }

  private itemSetter(value: Trim | undefined) {
    this.service.item = value;
  }



  ////
}
