import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

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
                {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
            </Button>
        );
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
            theme={ButtonTheme.ICON_INSIDE}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
});
