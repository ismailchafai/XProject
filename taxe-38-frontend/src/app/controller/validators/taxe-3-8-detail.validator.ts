import {Validator, ValidatorItem} from "@bshg/validation";
import {Taxe38Detail} from "src/app/controller/entities/taxe-3-8-detail";
import {Locale38Detail} from 'src/app/controller/entities/locale-3-8-detail';
import {TauxTaxe38} from 'src/app/controller/entities/taux-taxe-3-8';
import {Taxe38} from 'src/app/controller/entities/taxe-3-8';

export class Taxe38DetailValidator extends Validator< Taxe38Detail> {
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
  montantBase = new ValidatorItem<number>(
    () => this.item().montantBase,
    (value) => this.item().montantBase = value,
    (value) => {
      this.montantBase.numberValidators
        ?.required()
        ?.valid()
    }
  )
  montantRetardPremierMois = new ValidatorItem<number>(
    () => this.item().montantRetardPremierMois,
    (value) => this.item().montantRetardPremierMois = value,
    (value) => {
      this.montantRetardPremierMois.numberValidators
        ?.required()
        ?.valid()
    }
  )
  montantRetardAutreMois = new ValidatorItem<number>(
    () => this.item().montantRetardAutreMois,
    (value) => this.item().montantRetardAutreMois = value,
    (value) => {
      this.montantRetardAutreMois.numberValidators
        ?.required()
        ?.valid()
    }
  )
  locale38Detail = new ValidatorItem<Locale38Detail>(
    () => this.item().locale38Detail,
    (value) => this.item().locale38Detail = value,
    (value) => {
      this.locale38Detail.validators
        ?.errorIf(value?.id == null, "No Locale38Detail Was Provided!")
        ?.valid()
    }
  )
  tauxTaxe38 = new ValidatorItem<TauxTaxe38>(
    () => this.item().tauxTaxe38,
    (value) => this.item().tauxTaxe38 = value,
    (value) => {
      this.tauxTaxe38.validators
        ?.errorIf(value?.id == null, "No TauxTaxe38 Was Provided!")
        ?.valid()
    }
  )
  taxe38 = new ValidatorItem<Taxe38>(
    () => this.item().taxe38,
    (value) => this.item().taxe38 = value,
    (value) => {
      this.taxe38.validators
        ?.errorIf(value?.id == null, "No Taxe38 Was Provided!")
        ?.valid()
    }
  )

  override validatorItems: ValidatorItem< any>[] = [
    this.code,
    this.montantParMetreCarre,
    this.montantBase,
    this.montantRetardPremierMois,
    this.montantRetardAutreMois,
    this.locale38Detail,
    this.tauxTaxe38,
    this.taxe38,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => Taxe38Detail): Taxe38DetailValidator {
    const validator = new Taxe38DetailValidator()
    validator.item = item
    return validator;
  }

}
