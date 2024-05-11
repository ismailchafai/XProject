import {Validator, ValidatorItem} from "@bshg/validation";
import {NotificationRetardTroisiemeNiveau} from "src/app/controller/entities/notification-retard-troisieme-niveau";
import {Locale} from 'src/app/controller/entities/locale';
import {Redevable} from 'src/app/controller/entities/redevable';
import {Trim} from 'src/app/controller/entities/trim';

export class NotificationRetardTroisiemeNiveauValidator extends Validator< NotificationRetardTroisiemeNiveau> {
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
    this.locale,
    this.redevable,
    this.trim,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => NotificationRetardTroisiemeNiveau): NotificationRetardTroisiemeNiveauValidator {
    const validator = new NotificationRetardTroisiemeNiveauValidator()
    validator.item = item
    return validator;
  }

}
