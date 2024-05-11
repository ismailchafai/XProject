import {Validator, ValidatorItem} from "@bshg/validation";
import {Quartier} from "src/app/controller/entities/quartier";
import {Secteur} from 'src/app/controller/entities/secteur';

export class QuartierValidator extends Validator< Quartier> {
  code = new ValidatorItem<string>(
    () => this.item().code,
    (value) => this.item().code = value,
    (value) => {
      this.code.stringValidators
        ?.required()
        ?.valid()
    }
  )
  libelle = new ValidatorItem<string>(
    () => this.item().libelle,
    (value) => this.item().libelle = value,
    (value) => {
      this.libelle.stringValidators
        ?.required()
        ?.valid()
    }
  )
  secteur = new ValidatorItem<Secteur>(
    () => this.item().secteur,
    (value) => this.item().secteur = value,
    (value) => {
      this.secteur.validators
        ?.errorIf(value?.id == null, "No Secteur Was Provided!")
        ?.valid()
    }
  )

  override validatorItems: ValidatorItem< any>[] = [
    this.code,
    this.libelle,
    this.secteur,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => Quartier): QuartierValidator {
    const validator = new QuartierValidator()
    validator.item = item
    return validator;
  }

}
