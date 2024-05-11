import {Validator, ValidatorItem} from "@bshg/validation";
import {Locale38Detail} from "src/app/controller/entities/locale-3-8-detail";
import {TypeLocale38Detail} from 'src/app/controller/entities/type-locale-3-8-detail';

export class Locale38DetailValidator extends Validator< Locale38Detail> {
  code = new ValidatorItem<string>(
    () => this.item().code,
    (value) => this.item().code = value,
    (value) => {
      this.code.stringValidators
        ?.required()
        ?.valid()
    }
  )
  superficie = new ValidatorItem<number>(
    () => this.item().superficie,
    (value) => this.item().superficie = value,
    (value) => {
      this.superficie.numberValidators
        ?.required()
        ?.valid()
    }
  )
  active = new ValidatorItem<boolean>(
    () => this.item().active,
    (value) => this.item().active = value,
    (value) => {
      this.active.validators
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

  override validatorItems: ValidatorItem< any>[] = [
    this.code,
    this.superficie,
    this.active,
    this.typeLocale38Detail,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => Locale38Detail): Locale38DetailValidator {
    const validator = new Locale38DetailValidator()
    validator.item = item
    return validator;
  }

}
