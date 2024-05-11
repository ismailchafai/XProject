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


import {QuartierService} from "src/app/controller/services/quartier.service";
import {Quartier} from "src/app/controller/entities/quartier";
import {QuartierValidator} from "src/app/controller/validators/quartier.validator";
import {SecteurService} from "src/app/controller/services/secteur.service";
import {Secteur} from "src/app/controller/entities/secteur";

@Component({
  selector: 'app-quartier-update',
  standalone: true,
  imports: [
    FormSelectDirective, RowComponent, ColComponent, FormControlDirective,
    FormsModule, FormLabelDirective, FormFloatingDirective, CardComponent, NgTemplateOutlet,
    CardBodyComponent, CardHeaderComponent, InputGroupComponent, ButtonDirective,
    RouterLink, NavComponent, NavItemComponent, FormCheckComponent, SpinnerComponent,
    FormCheckLabelDirective, FormCheckInputDirective, FormFeedbackComponent, IconDirective,
    
  ],
  templateUrl: './quartier-update.component.html',
  styleUrl: './quartier-update.component.scss'
})
export class QuartierUpdateComponent {
  protected isPartOfUpdateForm = false // true if it is used as part of other update component
  protected sending = false
  protected resetting = false
  protected standAlon = true

  @Input("getter") set setItemGetter(getter: () => Quartier) {
    this.itemGetter = getter
    this.standAlon = false
    this.isPartOfUpdateForm = true
  }
  @Input("setter") set setItemSetter(setter: (value: Quartier | undefined) => void) {
    this.itemSetter = setter
  }
  @Input("validator") set setValidator(validator: QuartierValidator) {
    this.validator = validator
  }

  private router = inject(Router)
  private service = inject(QuartierService)
  private secteurService = inject(SecteurService)

  protected validator = QuartierValidator.init(() => this.item)

  protected secteurList!: Secteur[]

  ngAfterContentInit() {
    if (!this.isPartOfUpdateForm && this.item.id == null) this.router.navigate(["/quartier"]).then()
  }

  ngOnInit() {
    if(this.service.keepData) {
      let secteurCreated = this.secteurService.createdItemAfterReturn;
      if (secteurCreated.created) {
        this.item.secteur = secteurCreated.item
        this.validator.secteur.validate()
      }
    } else { this.validator.reset() }

    this.loadSecteurList()
  }

  // LOAD DATA
  loadSecteurList() {
    this.secteurService.findAllOptimized().subscribe({
      next: data => this.secteurList = data,
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
        this.router.navigate(["/quartier"]).then()
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

  public get item(): Quartier {
    return this.itemGetter();
  }

  public set item(value: Quartier | undefined) {
    this.itemSetter(value);
  }

  private itemGetter(): Quartier {
    return this.service.item;
  }

  private itemSetter(value: Quartier | undefined) {
    this.service.item = value;
  }

  public get secteur(): Secteur {
    if (this.item.secteur == null)
      this.item.secteur = new Secteur()
    return this.item.secteur;
  }
  public set secteur(value: Secteur | undefined) {
    this.item.secteur = value;
  }



  public navigateToSecteurCreate() {
    this.secteurService.returnUrl = this.router.url
    this.router.navigate(['/secteur/create']).then()
  }

  ////
}
