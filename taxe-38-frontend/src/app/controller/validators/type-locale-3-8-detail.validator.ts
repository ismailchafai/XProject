import {Validator, ValidatorItem} from "@bshg/validation";
import {TypeLocale38Detail} from "src/app/controller/entities/type-locale-3-8-detail";

export class TypeLocale38DetailValidator extends Validator< TypeLocale38Detail> {
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

  static init(item: () => TypeLocale38Detail): TypeLocale38DetailValidator {
    const validator = new TypeLocale38DetailValidator()
    validator.item = item
    return validator;
  }

}
