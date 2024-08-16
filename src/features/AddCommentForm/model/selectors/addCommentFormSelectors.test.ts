import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getCommentFormError,
    getCommentFormText,
} from './addCommentFormSelectors';

describe('addCommentFormSelectors', () => {
    test('getCommentFormText success', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'test',
            },
        };
        expect(getCommentFormText(state as StateSchema)).toBe('test');
    });
    test('getCommentFormText with no state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCommentFormText(state as StateSchema)).toBe('');
    });
    test('getCommentFormError success', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getCommentFormError(state as StateSchema)).toBe('error');
    });
    test('getCommentFormError with no state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCommentFormError(state as StateSchema)).toBe(undefined);
    });
});
