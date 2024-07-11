import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Popover } from 'shared/ui/Popover/Popover';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification-icon.svg';
import cls from './notificationButton.module.scss';

interface notificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: notificationButtonProps) => {
    const { className } = props;
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            anchor="bottom end"
            trigger={(
                <Button theme={ButtonTheme.ICON_INSIDE}>
                    <Icon inverted Svg={NotificationIcon} />
                </Button>
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
