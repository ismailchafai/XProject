import {Validator, ValidatorItem} from "@bshg/validation";
import {NotificationRetardPremierNiveau} from "src/app/controller/entities/notification-retard-premier-niveau";
import {Locale} from 'src/app/controller/entities/locale';
import {Redevable} from 'src/app/controller/entities/redevable';

export class NotificationRetardPremierNiveauValidator extends Validator< NotificationRetardPremierNiveau> {
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
    this.locale,
    this.redevable,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => NotificationRetardPremierNiveau): NotificationRetardPremierNiveauValidator {
    const validator = new NotificationRetardPremierNiveauValidator()
    validator.item = item
    return validator;
  }

}
