import { ValidationMetadataArgs } from './ValidationMetadataArgs';
import { ValidationArguments } from '../validation/ValidationArguments';

/**
 * This metadata contains validation rules.
 */
export class ValidationMetadata {
  // -------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------

  /**
   * Validation type.
   */
  type: string;

  /**
   * Validator name.
   */
  name?: string;

  /**
   * Target class to which this validation is applied.
   */
  target: Function | string;

  /**
   * Property of the object to be validated.
   */
  propertyName: string;

  /**
   * Constraint class that performs validation. Used only for custom validations.
   */
  constraintCls: Function;

  /**
   * Array of constraints of this validation.
   */
  constraints: any[];

  /**
   * Validation message to be shown in the case of error.
   */
  message: string | ((args: ValidationArguments) => string);

  /**
   * Validation groups used for this validation.
   */
  groups: string[] = [];

  /**
   * Indicates if validation must be performed always, no matter of validation groups used.
   */
  always?: boolean;

  /**
   * Specifies if validated value is an array and each of its item must be validated.
   */
  each: boolean = false;

  /*
   * A transient set of data passed through to the validation result for response mapping
   */
  context?: any = undefined;

  /**
   * Extra options specific to validation type.
   */
  validationTypeOptions: any;

  /**
   * 注解传入的参数条件
   */
  arguments?: any[];

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor(args: ValidationMetadataArgs) {
    this.type = args.type;
    this.name = args.name;
    this.target = args.target;
    this.propertyName = args.propertyName;
    this.constraints = args?.constraints;
    this.constraintCls = args.constraintCls;
    this.arguments = args?.constraints;
    this.validationTypeOptions = args.validationTypeOptions;
    if (args.validationOptions) {
      this.message = args.validationOptions.message;
      this.groups = args.validationOptions.groups;
      this.always = args.validationOptions.always;
      this.each = args.validationOptions.each;
      this.context = args.validationOptions.context;
    }
  }
}
