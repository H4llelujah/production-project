import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticle } from './fetchNextArticle';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

jest.mock('../fetchArticleList/fetchArticleList');

describe('fetchNextArticle', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticle, {
            articlesPage: {
                entities: {},
                ids: [],
                isLoading: false,
                hasMore: true,
                page: 2,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticleList).toHaveBeenCalled();
    });

    test('fetchArticleList not called HasMore - false', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticle, {
            articlesPage: {
                entities: {},
                ids: [],
                isLoading: false,
                hasMore: false,
                page: 2,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });

    test('fetchArticleList not called isLoading - true', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticle, {
            articlesPage: {
                entities: {},
                ids: [],
                isLoading: true,
                hasMore: true,
                page: 2,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
});
