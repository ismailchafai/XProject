import {Validator, ValidatorItem} from "@bshg/validation";
import {CategorieLocale} from "src/app/controller/entities/categorie-locale";

export class CategorieLocaleValidator extends Validator< CategorieLocale> {
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

  static init(item: () => CategorieLocale): CategorieLocaleValidator {
    const validator = new CategorieLocaleValidator()
    validator.item = item
    return validator;
  }

}
