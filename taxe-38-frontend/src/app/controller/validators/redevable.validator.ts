import {Validator, ValidatorItem} from "@bshg/validation";
import {Redevable} from "src/app/controller/entities/redevable";
import {AppUserValidator} from "src/app/controller/auth/validators/app-user.validator";

export class RedevableValidator extends Validator< Redevable> {
  cin = new ValidatorItem<string>(
    () => this.item().cin,
    (value) => this.item().cin = value,
    (value) => {
      this.cin.stringValidators
        ?.required()
        ?.valid()
    }
  )
  firstName = new ValidatorItem<string>(
    () => this.item().firstName,
    (value) => this.item().firstName = value,
    (value) => {
      this.firstName.stringValidators
        ?.required()
        ?.valid()
    }
  )
  lastName = new ValidatorItem<string>(
    () => this.item().lastName,
    (value) => this.item().lastName = value,
    (value) => {
      this.lastName.stringValidators
        ?.required()
        ?.valid()
    }
  )
  username = new ValidatorItem< string>(
    () => this.item().username,
    (value) => this.item().username = value,
    (value) => {
      this.username.stringValidators
        ?.required()
        ?.valid()
    }
  )
  password= new ValidatorItem< string>(
    () => this.item().password,
    (value) => this.item().password = value,
    (value) => {
      this.password.stringValidators
        ?.required()
        ?.min(6)
        ?.valid()
    }
  )

  override validatorItems: ValidatorItem< any>[] = [
    this.cin,
    this.firstName,
    this.lastName,
    this.username,
    this.password,
  ]

  override getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => Redevable): RedevableValidator {
    const validator = new RedevableValidator()
    validator.item = item
    return validator;
  }

}
