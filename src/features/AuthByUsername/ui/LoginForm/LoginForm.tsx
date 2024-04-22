import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
    className?: string;
    isOpen?: boolean;
}

export const LoginForm = memo(({ className, isOpen }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Введите username')}
                autoFocus={isOpen}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
                {t('Войти')}
            </Button>
        </div>
    );
});
