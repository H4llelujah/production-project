import React from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePaths.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePaths.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePaths.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
];
