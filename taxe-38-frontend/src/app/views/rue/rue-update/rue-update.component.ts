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
import {QuartierService} from "src/app/controller/services/quartier.service";
import {Quartier} from "src/app/controller/entities/quartier";

@Component({
  selector: 'app-rue-update',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent, NgTemplateOutlet,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, FormCheckComponent, SpinnerComponent,
    FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent, IconDirective,
    
  ],
  templateUrl: './rue-update.component.html',
  styleUrl: './rue-update.component.scss'
})
export class RueUpdateComponent {
  protected isPartOfUpdateForm = false // true if it is used as part of other update component
  protected sending = false
  protected resetting = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Rue) {
    this.itemGetter = getter
    this.standAlon = false
    this.isPartOfUpdateForm = true
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

  ngAfterContentInit() {
    if (!this.isPartOfUpdateForm && this.item.id == null) this.router.navigate(["/rue"]).then()
  }

  ngOnInit() {
    if(this.service.keepData) {
      let quartierCreated = this.quartierService.createdItemAfterReturn;
      if (quartierCreated.created) {
        this.item.quartier = quartierCreated.item
        this.validator.quartier.validate()
      }
    } else { this.validator.reset() }

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
  update() {
    console.log(this.item)
    if (!this.validator.validate()) return;
    this.sending = true;
    this.service.update().subscribe({
      next: data => {
        this.sending = false
        if (data == null) return
        this.router.navigate(["/rue"]).then()
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



  public navigateToQuartierCreate() {
    this.quartierService.returnUrl = this.router.url
    this.router.navigate(['/quartier/create']).then()
  }

  ////
}
