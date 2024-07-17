import { Profile } from '@/entities/Profile';
import { validateProfileError } from '../../consts/ProfileCardConsts';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [validateProfileError.NO_DATA];
    }
    const { first, age, lastname } = profile;

    const errors: validateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(validateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age) || age > 120) {
        errors.push(validateProfileError.INCORRECT_USER_AGE);
    }

    return errors;
};
