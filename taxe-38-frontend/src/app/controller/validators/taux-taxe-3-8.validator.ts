import {Validator, ValidatorItem} from "@bshg/validation";
import {TauxTaxe38} from "src/app/controller/entities/taux-taxe-3-8";
import {TypeLocale38Detail} from 'src/app/controller/entities/type-locale-3-8-detail';
import {CategorieLocale} from 'src/app/controller/entities/categorie-locale';

export class TauxTaxe38Validator extends Validator< TauxTaxe38> {
  code = new ValidatorItem<string>(
    () => this.item().code,
    (value) => this.item().code = value,
    (value) => {
      this.code.stringValidators
        ?.required()
        ?.valid()
    }
  )
  montantParMetreCarre = new ValidatorItem<number>(
    () => this.item().montantParMetreCarre,
    (value) => this.item().montantParMetreCarre = value,
    (value) => {
      this.montantParMetreCarre.numberValidators
        ?.required()
        ?.valid()
    }
  )
  dateMin = new ValidatorItem<Date>(
    () => this.item().dateMin,
    (value) => this.item().dateMin = value,
    (value) => {
      this.dateMin.validators
        ?.required()
        ?.valid()
    }
  )
  dateMax = new ValidatorItem<Date>(
    () => this.item().dateMax,
    (value) => this.item().dateMax = value,
    (value) => {
      this.dateMax.validators
        ?.required()
        ?.valid()
    }
  )
  pourcentagePremierRetard = new ValidatorItem<number>(
    () => this.item().pourcentagePremierRetard,
    (value) => this.item().pourcentagePremierRetard = value,
    (value) => {
      this.pourcentagePremierRetard.numberValidators
        ?.required()
        ?.valid()
    }
  )
  pourcentageAutreMoisRetard = new ValidatorItem<number>(
    () => this.item().pourcentageAutreMoisRetard,
    (value) => this.item().pourcentageAutreMoisRetard = value,
    (value) => {
      this.pourcentageAutreMoisRetard.numberValidators
        ?.required()
        ?.valid()
    }
  )
  typeLocale38Detail = new ValidatorItem<TypeLocale38Detail>(
    () => this.item().typeLocale38Detail,
    (value) => this.item().typeLocale38Detail = value,
    (value) => {
      this.typeLocale38Detail.validators
        ?.errorIf(value?.id == null, "No TypeLocale38Detail Was Provided!")
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
    this.montantParMetreCarre,
    this.dateMin,
    this.dateMax,
    this.pourcentagePremierRetard,
    this.pourcentageAutreMoisRetard,
    this.typeLocale38Detail,
    this.categorieLocale,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => TauxTaxe38): TauxTaxe38Validator {
    const validator = new TauxTaxe38Validator()
    validator.item = item
    return validator;
  }

}
