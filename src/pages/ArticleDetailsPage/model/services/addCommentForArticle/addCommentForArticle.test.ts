import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Comment } from 'entities/Comment';
import { addCommentForArticle } from './addCommentForArticle';

const testComment: Comment = {
    id: '1',
    user: { id: '1', username: 'test' },
    text: '',
};

describe('addCommentForArticle', () => {
    test('sucsess add comment', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: { id: '1', username: 'test' },
            },
            articleDetails: { data: { id: '2' } },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ data: testComment }));

        const result = await thunk.callThunk('test1');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(testComment);
    });
    test('error add comment', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {});
        thunk.api.post.mockReturnValue(Promise.resolve(testComment));

        const result = await thunk.callThunk('test1');

        expect(thunk.api.post).toHaveBeenCalledTimes(0);
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(undefined);
    });
    test('error no text', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {});
        thunk.api.post.mockReturnValue(Promise.resolve(testComment));

        const result = await thunk.callThunk('');

        expect(thunk.api.post).toHaveBeenCalledTimes(0);
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(undefined);
    });
});
