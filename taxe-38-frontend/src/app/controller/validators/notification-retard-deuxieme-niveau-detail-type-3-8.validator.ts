import {Validator, ValidatorItem} from "@bshg/validation";
import {NotificationRetardDeuxiemeNiveauDetailType38} from "src/app/controller/entities/notification-retard-deuxieme-niveau-detail-type-3-8";
import {TypeLocale38Detail} from 'src/app/controller/entities/type-locale-3-8-detail';

export class NotificationRetardDeuxiemeNiveauDetailType38Validator extends Validator< NotificationRetardDeuxiemeNiveauDetailType38> {
  code = new ValidatorItem<string>(
    () => this.item().code,
    (value) => this.item().code = value,
    (value) => {
      this.code.stringValidators
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
  montantTotal = new ValidatorItem<number>(
    () => this.item().montantTotal,
    (value) => this.item().montantTotal = value,
    (value) => {
      this.montantTotal.numberValidators
        ?.required()
        ?.valid()
    }
  )
  typeLocale38 = new ValidatorItem<TypeLocale38Detail>(
    () => this.item().typeLocale38,
    (value) => this.item().typeLocale38 = value,
    (value) => {
      this.typeLocale38.validators
        ?.errorIf(value?.id == null, "No TypeLocale38 Was Provided!")
        ?.valid()
    }
  )

  override validatorItems: ValidatorItem< any>[] = [
    this.code,
    this.montantBase,
    this.montantRetardPremierMois,
    this.montantRetardAutreMois,
    this.montantTotal,
    this.typeLocale38,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => NotificationRetardDeuxiemeNiveauDetailType38): NotificationRetardDeuxiemeNiveauDetailType38Validator {
    const validator = new NotificationRetardDeuxiemeNiveauDetailType38Validator()
    validator.item = item
    return validator;
  }

}
