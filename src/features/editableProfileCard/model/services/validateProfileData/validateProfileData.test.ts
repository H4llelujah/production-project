import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { validateProfileData } from './validateProfileData';
import { validateProfileError } from '../../consts/ProfileCardConsts';

const data = {
    age: 21,
    first: 'Pavel',
    lastname: 'Baldin',
    username: 'admin',
    city: 'Kopeysk',
    country: Country.Russia,
    currency: Currency.USD,
};

describe('validateProfileData', () => {
    test('success', () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });
    test('without firstname and lastname', () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([validateProfileError.INCORRECT_USER_DATA]);
    });
    test('with age error', () => {
        const UndefinedResult = validateProfileData({
            ...data,
            age: undefined,
        });
        const BigNumberResult = validateProfileData({ ...data, age: 1000 });

        expect(UndefinedResult).toEqual([
            validateProfileError.INCORRECT_USER_AGE,
        ]);
        expect(BigNumberResult).toEqual([
            validateProfileError.INCORRECT_USER_AGE,
        ]);
    });

    test('incorrect all', () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            validateProfileError.INCORRECT_USER_DATA,
            validateProfileError.INCORRECT_USER_AGE,
        ]);
    });
    test('incorrect data', () => {
        const result = validateProfileData();

        expect(result).toEqual([validateProfileError.NO_DATA]);
    });
});
