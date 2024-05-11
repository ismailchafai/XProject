import {Validator, ValidatorItem} from "@bshg/validation";
import {NotificationRetardDeuxiemeNiveau} from "src/app/controller/entities/notification-retard-deuxieme-niveau";
import {Locale} from 'src/app/controller/entities/locale';
import {Redevable} from 'src/app/controller/entities/redevable';

export class NotificationRetardDeuxiemeNiveauValidator extends Validator< NotificationRetardDeuxiemeNiveau> {
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
  locale = new ValidatorItem<Locale>(
    () => this.item().locale,
    (value) => this.item().locale = value,
    (value) => {
      this.locale.validators
        ?.errorIf(value?.id == null, "No Locale Was Provided!")
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

  override validatorItems: ValidatorItem< any>[] = [
    this.code,
    this.anne,
    this.montantBase,
    this.montantRetardPremierMois,
    this.montantRetardAutreMois,
    this.montantTotal,
    this.locale,
    this.redevable,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => NotificationRetardDeuxiemeNiveau): NotificationRetardDeuxiemeNiveauValidator {
    const validator = new NotificationRetardDeuxiemeNiveauValidator()
    validator.item = item
    return validator;
  }

}
