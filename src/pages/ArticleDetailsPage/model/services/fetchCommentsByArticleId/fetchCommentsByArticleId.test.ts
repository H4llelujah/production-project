import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const testCommentArray: Comment[] = [
    {
        id: '1',
        user: { id: 1, username: 'test' },
        text: 'someComment1',
    },
    {
        id: '2',
        user: { id: 1, username: 'test' },
        text: 'someComment2',
    },
    {
        id: '3',
        user: { id: 1, username: 'test' },
        text: 'someComment3',
    },
];

describe('fetchCommentsByArticleId', () => {
    test('sucsess fetching', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: testCommentArray }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(testCommentArray);
    });
    test('error fetching', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
    test('no article Id', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk(undefined);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
