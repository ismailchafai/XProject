import {Validator, ValidatorItem} from "@bshg/validation";
import {Taxe38} from "src/app/controller/entities/taxe-3-8";
import {Redevable} from 'src/app/controller/entities/redevable';
import {Locale} from 'src/app/controller/entities/locale';
import {Trim} from 'src/app/controller/entities/trim';

export class Taxe38Validator extends Validator< Taxe38> {
  code = new ValidatorItem<string>(
    () => this.item().code,
    (value) => this.item().code = value,
    (value) => {
      this.code.stringValidators
        ?.required()
        ?.valid()
    }
  )
  anne = new ValidatorItem<number>(
    () => this.item().anne,
    (value) => this.item().anne = value,
    (value) => {
      this.anne.numberValidators
        ?.required()
        ?.valid()
    }
  )
  datePresentaion = new ValidatorItem<Date>(
    () => this.item().datePresentaion,
    (value) => this.item().datePresentaion = value,
    (value) => {
      this.datePresentaion.validators
        ?.required()
        ?.valid()
    }
  )
  nombreMoisRetard = new ValidatorItem<number>(
    () => this.item().nombreMoisRetard,
    (value) => this.item().nombreMoisRetard = value,
    (value) => {
      this.nombreMoisRetard.numberValidators
        ?.required()
        ?.valid()
    }
  )
  montantBase = new ValidatorItem<number>(
    () => this.item().montantBase,
    (value) => this.item().montantBase = value,
    (value) => {
      this.montantBase.numberValidators
        ?.required()
        ?.valid()
    }
  )
  montantRetardPremeirMois = new ValidatorItem<number>(
    () => this.item().montantRetardPremeirMois,
    (value) => this.item().montantRetardPremeirMois = value,
    (value) => {
      this.montantRetardPremeirMois.numberValidators
        ?.required()
        ?.valid()
    }
  )
  montantTotal = new ValidatorItem<number>(
    () => this.item().montantTotal,
    (value) => this.item().montantTotal = value,
    (value) => {
      this.montantTotal.numberValidators
        ?.required()
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
  locale = new ValidatorItem<Locale>(
    () => this.item().locale,
    (value) => this.item().locale = value,
    (value) => {
      this.locale.validators
        ?.errorIf(value?.id == null, "No Locale Was Provided!")
        ?.valid()
    }
  )
  trim = new ValidatorItem<Trim>(
    () => this.item().trim,
    (value) => this.item().trim = value,
    (value) => {
      this.trim.validators
        ?.errorIf(value?.id == null, "No Trim Was Provided!")
        ?.valid()
    }
  )

  override validatorItems: ValidatorItem< any>[] = [
    this.code,
    this.anne,
    this.datePresentaion,
    this.nombreMoisRetard,
    this.montantBase,
    this.montantRetardPremeirMois,
    this.montantTotal,
    this.redevable,
    this.locale,
    this.trim,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => Taxe38): Taxe38Validator {
    const validator = new Taxe38Validator()
    validator.item = item
    return validator;
  }

}
