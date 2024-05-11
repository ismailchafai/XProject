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


import {RedevableService} from "src/app/controller/services/redevable.service";
import {Redevable} from "src/app/controller/entities/redevable";
import {RedevableValidator} from "src/app/controller/validators/redevable.validator";
import {ValidatorResult} from "@bshg/validation";

@Component({
  selector: 'app-redevable-create',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective, NgTemplateOutlet,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, SpinnerComponent, IconDirective,
    FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent,
    
  ],
  templateUrl: './redevable-create.component.html',
  styleUrl: './redevable-create.component.scss'
})
export class RedevableCreateComponent {
  protected sending = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Redevable) {
    this.itemGetter = getter
    this.standAlon = false
  }
  @Input("setter") set setItemSetter(setter: (value: Redevable | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: RedevableValidator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(RedevableService)

  protected validator = RedevableValidator.init(() => this.item)


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
        this.router.navigate(["/redevable"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
        this.validator.import(err.error as ValidatorResult< any>[])
      }
    })
  }

  reset(force = true) {
    if (force || this.item == null) this.item = new Redevable()
    this.validator.reset()
  }

  // GETTERS AND SETTERS
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get item(): Redevable {
    return this.itemGetter();
  }

  public set item(value: Redevable | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): Redevable {
    return this.service.item;
  }

  private itemSetter(value: Redevable | undefined) {
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
