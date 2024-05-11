import {Validator, ValidatorItem} from "@bshg/validation";
import {Ville} from "src/app/controller/entities/ville";

export class VilleValidator extends Validator< Ville> {
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

  override validatorItems: ValidatorItem< any>[] = [
    this.code,
    this.libelle,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => Ville): VilleValidator {
    const validator = new VilleValidator()
    validator.item = item
    return validator;
  }

}
