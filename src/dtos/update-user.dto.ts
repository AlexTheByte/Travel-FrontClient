export class UpdateUserDto {
  mobile_phone!: string;

  first_name!: string;

  last_name!: string;

  birth_date!: Date;

  bio!: string;

  languages!: Array<number>;

  interests!: Array<number>;
}
