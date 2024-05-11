import {Validator, ValidatorItem} from "@bshg/validation";
import {Locale} from "src/app/controller/entities/locale";
import {Rue} from 'src/app/controller/entities/rue';
import {Redevable} from 'src/app/controller/entities/redevable';
import {CategorieLocale} from 'src/app/controller/entities/categorie-locale';

export class LocaleValidator extends Validator< Locale> {
  code = new ValidatorItem<string>(
    () => this.item().code,
    (value) => this.item().code = value,
    (value) => {
      this.code.stringValidators
        ?.required()
        ?.valid()
    }
  )
  complementAdresse = new ValidatorItem<string>(
    () => this.item().complementAdresse,
    (value) => this.item().complementAdresse = value,
    (value) => {
      this.complementAdresse.stringValidators
        ?.required()
        ?.valid()
    }
  )
  rue = new ValidatorItem<Rue>(
    () => this.item().rue,
    (value) => this.item().rue = value,
    (value) => {
      this.rue.validators
        ?.errorIf(value?.id == null, "No Rue Was Provided!")
        ?.valid()
    }
  )
  redevable = new ValidatorItem<Redevable>(
    () => this.item().redevable,
    (value) => this.item().redevable = value,
    (value) => {
      this.redevable.validators
        ?.errorIf(value?.id == null, "No Redevable Was Provided!")
        ?.valid()
    }
  )
  categorieLocale = new ValidatorItem<CategorieLocale>(
    () => this.item().categorieLocale,
    (value) => this.item().categorieLocale = value,
    (value) => {
      this.categorieLocale.validators
        ?.errorIf(value?.id == null, "No CategorieLocale Was Provided!")
        ?.valid()
    }
  )

  override validatorItems: ValidatorItem< any>[] = [
    this.code,
    this.complementAdresse,
    this.rue,
    this.redevable,
    this.categorieLocale,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => Locale): LocaleValidator {
    const validator = new LocaleValidator()
    validator.item = item
    return validator;
  }

}
