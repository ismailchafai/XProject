import {Validator, ValidatorItem} from "@bshg/validation";
import {Rue} from "src/app/controller/entities/rue";
import {Quartier} from 'src/app/controller/entities/quartier';

export class RueValidator extends Validator< Rue> {
  code = new ValidatorItem<string>(
    () => this.item().code,
    (value) => this.item().code = value,
    (value) => {
      this.code.stringValidators
        ?.required()
        ?.valid()
    }
  )
  libelle = new ValidatorItem<string>(
    () => this.item().libelle,
    (value) => this.item().libelle = value,
    (value) => {
      this.libelle.stringValidators
        ?.required()
        ?.valid()
    }
  )
  quartier = new ValidatorItem<Quartier>(
    () => this.item().quartier,
    (value) => this.item().quartier = value,
    (value) => {
      this.quartier.validators
        ?.errorIf(value?.id == null, "No Quartier Was Provided!")
        ?.valid()
    }
  )

  override validatorItems: ValidatorItem< any>[] = [
    this.code,
    this.libelle,
    this.quartier,
  ]

  getValidatorItem(fieldName: string): ValidatorItem< any> {
    // @ts-ignore
    return this[fieldName];
  }

  static init(item: () => Rue): RueValidator {
    const validator = new RueValidator()
    validator.item = item
    return validator;
  }

}
