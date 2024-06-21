import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
}

interface DynamicModlueLoaderProps {
    children: ReactNode;
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModlueLoader: FC<DynamicModlueLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount = true } = props;
    const dispatch = useAppDispatch();

    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducres();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
