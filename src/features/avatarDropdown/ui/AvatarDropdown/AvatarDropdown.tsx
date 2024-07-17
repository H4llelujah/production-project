import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { RoutePaths } from '@/shared/config/routeConfig/routeConfig';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvaliable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            trigger={<Avatar size={30} src={authData.avatar} />}
            anchor="bottom end"
            items={[
                ...(isAdminPanelAvaliable ? [{
                    content: t('Админка'),
                    href: RoutePaths.admin_panel,
                }] : []),
                {
                    content: t('Профиль'),
                    href: RoutePaths.profile + authData.id,
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
        />
    );
});
