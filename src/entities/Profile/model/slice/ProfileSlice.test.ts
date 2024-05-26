import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, validateProfileError } from '../types/profile';
import { profileActions, profileReducer, updateProfileData } from './ProfileSlice';

const data = {
    age: 21,
    first: 'Pavel',
    lastname: 'Baldin',
    username: 'admin',
    city: 'Kopeysk',
    country: Country.Russia,
    currency: Currency.USD,
};

describe('Profile', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });
    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            validateErrors: [validateProfileError.INCORRECT_USER_DATA],
            form: { first: '' },
            data,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            form: data,
            data,
        });
    });
    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { first: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ first: 'hello' }),
        )).toEqual({
            form: { first: 'hello' },
        });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [validateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending(''),
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
