import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/item';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean,
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.INVERTED}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
