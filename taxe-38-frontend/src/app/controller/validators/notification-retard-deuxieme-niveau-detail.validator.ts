import {Validator, ValidatorItem} from "@bshg/validation";
import {NotificationRetardDeuxiemeNiveauDetail} from "src/app/controller/entities/notification-retard-deuxieme-niveau-detail";
import {Trim} from 'src/app/controller/entities/trim';

export class NotificationRetardDeuxiemeNiveauDetailValidator extends Validator< NotificationRetardDeuxiemeNiveauDetail> {
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
    this.montantBase,
    this.montantRetardPremierMois,
    this.montantRetardAutreMois,
    this.montantTotal,
    this.trim,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => NotificationRetardDeuxiemeNiveauDetail): NotificationRetardDeuxiemeNiveauDetailValidator {
    const validator = new NotificationRetardDeuxiemeNiveauDetailValidator()
    validator.item = item
    return validator;
  }

}
