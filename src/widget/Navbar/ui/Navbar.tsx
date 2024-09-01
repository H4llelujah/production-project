import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleCreate } from '@/shared/const/router';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.NavbarRedesigned,
        off: () => cls.Navbar,
    });

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header className={classNames(mainClass, {}, [className])}>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header className={classNames(mainClass, {}, [className])}>
                        <TextDeprecated
                            className={cls.appName}
                            title={t('Leddit')}
                            theme={TextTheme.INVERTED}
                        />
                        <AppLink
                            to={getRouteArticleCreate()}
                            theme={AppLinkTheme.INVERTED}
                        >
                            {t('Создать статью')}
                        </AppLink>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <header className={classNames(mainClass, {}, [className])}>
                    <div className={cls.links}>
                        <Button variant="clear" onClick={onShowModal}>
                            {t('Войти')}
                        </Button>
                        {isAuthModal && (
                            <LoginModal
                                isOpen={isAuthModal}
                                onClose={onCloseModal}
                            />
                        )}
                    </div>
                </header>
            }
            off={
                <header className={classNames(mainClass, {}, [className])}>
                    <TextDeprecated
                        className={cls.appName}
                        title={t('Leddit')}
                        theme={TextTheme.INVERTED}
                    />
                    <div className={cls.links}>
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR_INVERTED}
                            onClick={onShowModal}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                        {isAuthModal && (
                            <LoginModal
                                isOpen={isAuthModal}
                                onClose={onCloseModal}
                            />
                        )}
                    </div>
                </header>
            }
        />
    );
});
