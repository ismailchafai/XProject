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
import {VilleService} from "src/app/controller/services/ville.service";
import {Ville} from "src/app/controller/entities/ville";

@Component({
  selector: 'app-secteur-update',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent, NgTemplateOutlet,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, FormCheckComponent, SpinnerComponent,
    FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent, IconDirective,
    
  ],
  templateUrl: './secteur-update.component.html',
  styleUrl: './secteur-update.component.scss'
})
export class SecteurUpdateComponent {
  protected isPartOfUpdateForm = false // true if it is used as part of other update component
  protected sending = false
  protected resetting = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Secteur) {
    this.itemGetter = getter
    this.standAlon = false
    this.isPartOfUpdateForm = true
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

  ngAfterContentInit() {
    if (!this.isPartOfUpdateForm && this.item.id == null) this.router.navigate(["/secteur"]).then()
  }

  ngOnInit() {
    if(this.service.keepData) {
      let villeCreated = this.villeService.createdItemAfterReturn;
      if (villeCreated.created) {
        this.item.ville = villeCreated.item
        this.validator.ville.validate()
      }
    } else { this.validator.reset() }

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
  update() {
    console.log(this.item)
    if (!this.validator.validate()) return;
    this.sending = true;
    this.service.update().subscribe({
      next: data => {
        this.sending = false
        if (data == null) return
        this.router.navigate(["/secteur"]).then()
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



  public navigateToVilleCreate() {
    this.villeService.returnUrl = this.router.url
    this.router.navigate(['/ville/create']).then()
  }

  ////
}
