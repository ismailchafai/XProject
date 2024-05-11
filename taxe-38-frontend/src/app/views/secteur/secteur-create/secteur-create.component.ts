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


import {SecteurService} from "src/app/controller/services/secteur.service";
import {Secteur} from "src/app/controller/entities/secteur";
import {SecteurValidator} from "src/app/controller/validators/secteur.validator";
import {ValidatorResult} from "@bshg/validation";
import {VilleService} from "src/app/controller/services/ville.service";
import {Ville} from "src/app/controller/entities/ville";

@Component({
  selector: 'app-secteur-create',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective, NgTemplateOutlet,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, SpinnerComponent, IconDirective,
    FormCheckComponent, FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent,
    
  ],
  templateUrl: './secteur-create.component.html',
  styleUrl: './secteur-create.component.scss'
})
export class SecteurCreateComponent {
  protected sending = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Secteur) {
    this.itemGetter = getter
    this.standAlon = false
  }
  @Input("setter") set setItemSetter(setter: (value: Secteur | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: SecteurValidator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(SecteurService)
  private villeService = inject(VilleService)

  protected validator = SecteurValidator.init(() => this.item)

  protected villeList!: Ville[]

  ngOnInit() {
    if(this.service.keepData) {
      let villeCreated = this.villeService.createdItemAfterReturn;
      if (villeCreated.created) {
        this.item.ville = villeCreated.item
        this.validator.ville.validate()
      }
    } else { this.reset(false) }
    this.service.keepData = false

    this.loadVilleList()
  }

  // LOAD DATA
  loadVilleList() {
    this.villeService.findAllOptimized().subscribe({
      next: data => this.villeList = data,
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
        this.router.navigate(["/secteur"]).then()
      },
      error: err => {
        this.sending = false
        console.log(err)
        this.validator.import(err.error as ValidatorResult< any>[])
      }
    })
  }

  reset(force = true) {
    if (force || this.item == null) this.item = new Secteur()
    this.validator.reset()
  }

  // GETTERS AND SETTERS
  public get items() {
    return this.service.items;
  }

  public set items(value) {
    this.service.items = value;
  }

  public get item(): Secteur {
    return this.itemGetter();
  }

  public set item(value: Secteur | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): Secteur {
    return this.service.item;
  }

  private itemSetter(value: Secteur | undefined) {
    this.service.item = value;
  }

  public get ville(): Ville {
    if (this.item.ville == null)
      this.item.ville = new Ville()
    return this.item.ville;
  }
  public set ville(value: Ville | undefined) {
    this.item.ville = value;
  }



  public get returnUrl() {
    return this.service.returnUrl;
  }

  public get toReturn() {
    return this.service.toReturn();
  }

  public navigateToVilleCreate() {
    this.villeService.returnUrl = this.router.url
    this.service.keepData = true
    this.router.navigate(['/ville/create']).then()
  }

  ////
}
