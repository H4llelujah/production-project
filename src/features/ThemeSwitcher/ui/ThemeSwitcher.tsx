import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';

interface ThemeSwitcherProps {
    className?: string;
    invertedColor?: boolean;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className, invertedColor = false } = props;
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    if (invertedColor) {
        return (
            <Button
                className={classNames('', {}, [className])}
                onClick={onToggleHandler}
                theme={ButtonTheme.ICON_INSIDE}
            >
                <Icon Svg={ThemeIcon} width={40} height={40} inverted />
            </Button>
        );
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
            theme={ButtonTheme.ICON_INSIDE}
        >
            <Icon Svg={ThemeIcon} width={40} height={40} />
        </Button>
    );
});
