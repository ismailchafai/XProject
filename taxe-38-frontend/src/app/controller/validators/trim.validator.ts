import {Validator, ValidatorItem} from "@bshg/validation";
import {Trim} from "src/app/controller/entities/trim";

export class TrimValidator extends Validator< Trim> {
  numero = new ValidatorItem<number>(
    () => this.item().numero,
    (value) => this.item().numero = value,
    (value) => {
      this.numero.numberValidators
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
    this.numero,
    this.libelle,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => Trim): TrimValidator {
    const validator = new TrimValidator()
    validator.item = item
    return validator;
  }

}
