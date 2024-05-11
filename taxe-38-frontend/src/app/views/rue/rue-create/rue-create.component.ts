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


import {RueService} from "src/app/controller/services/rue.service";
import {Rue} from "src/app/controller/entities/rue";
import {RueValidator} from "src/app/controller/validators/rue.validator";
import {ValidatorResult} from "@bshg/validation";
import {QuartierService} from "src/app/controller/services/quartier.service";
import {Quartier} from "src/app/controller/entities/quartier";

@Component({
  selector: 'app-rue-create',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective, NgTemplateOutlet,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, SpinnerComponent, IconDirective,
    FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent,
    
  ],
  templateUrl: './rue-create.component.html',
  styleUrl: './rue-create.component.scss'
})
export class RueCreateComponent {
  protected sending = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Rue) {
    this.itemGetter = getter
    this.standAlon = false
  }
  @Input("setter") set setItemSetter(setter: (value: Rue | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: RueValidator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(RueService)
  private quartierService = inject(QuartierService)

  protected validator = RueValidator.init(() => this.item)

  protected quartierList!: Quartier[]

  ngOnInit() {
    if(this.service.keepData) {
      let quartierCreated = this.quartierService.createdItemAfterReturn;
      if (quartierCreated.created) {
        this.item.quartier = quartierCreated.item
        this.validator.quartier.validate()
      }
    } else { this.reset(false) }
    this.service.keepData = false

    this.loadQuartierList()
  }

  // LOAD DATA
  loadQuartierList() {
    this.quartierService.findAllOptimized().subscribe({
      next: data => this.quartierList = data,
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
        this.router.navigate(["/rue"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
        this.validator.import(err.error as ValidatorResult< any>[])
      }
    })
  }

  reset(force = true) {
    if (force || this.item == null) this.item = new Rue()
    this.validator.reset()
  }

  // GETTERS AND SETTERS
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get item(): Rue {
    return this.itemGetter();
  }

  public set item(value: Rue | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): Rue {
    return this.service.item;
  }

  private itemSetter(value: Rue | undefined) {
    this.service.item = value;
  }

  public get quartier(): Quartier {
    if (this.item.quartier == null)
      this.item.quartier = new Quartier()
    return this.item.quartier;
  }
  public set quartier(value: Quartier | undefined) {
    this.item.quartier = value;
  }



  public get returnUrl() {
    return this.service.returnUrl;
  }

  public get toReturn() {
    return this.service.toReturn();
  }

  public navigateToQuartierCreate() {
    this.quartierService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/quartier/create']).then()
  }

  ////
}
