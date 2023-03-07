import joi from 'joi';

const passSchema = joi.string().min(3).max(10);

export default function validate(password) {
    return passSchema.validate(password);
}

