import {Validator, ValidatorItem} from "@bshg/validation";
import {Secteur} from "src/app/controller/entities/secteur";
import {Ville} from 'src/app/controller/entities/ville';

export class SecteurValidator extends Validator< Secteur> {
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
  ville = new ValidatorItem<Ville>(
    () => this.item().ville,
    (value) => this.item().ville = value,
    (value) => {
      this.ville.validators
        ?.errorIf(value?.id == null, "No Ville Was Provided!")
        ?.valid()
    }
  )

  override validatorItems: ValidatorItem< any>[] = [
    this.code,
    this.libelle,
    this.ville,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => Secteur): SecteurValidator {
    const validator = new SecteurValidator()
    validator.item = item
    return validator;
  }

}
