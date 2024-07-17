import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { validateProfileError } from '../../consts/ProfileCardConsts';

describe('getProfileValidateErrors', () => {
    test('should return data', () => {
        const errors: validateProfileError[] = [
            validateProfileError.INCORRECT_USER_AGE,
            validateProfileError.INCORRECT_USER_DATA,
            validateProfileError.NO_DATA,
            validateProfileError.SERVER_ERROR,
        ];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
