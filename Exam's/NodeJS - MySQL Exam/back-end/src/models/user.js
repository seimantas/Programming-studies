import joi from "joi";

const userSchema = joi.oject({
  full_name: joi.string().required(),
  password: joi.string().required(),
  email: joi.string().required(),
});

export class User {
  id;
  full_name;
  password;
  email;
  reg_timestamp;

  constructor({ full_name, password, email, reg_timestamp, id }) {
    const newUserData = { full_name, password, email };

    const validationResult = userSchema.validate(newUserData);

    if (validationResult.error) throw Error(validationResult.error);

    this.full_name = full_name;
    this.password = password;
    this.email = email;
    this.reg_timestamp = reg_timestamp;
    this.id = id;
  }
}
