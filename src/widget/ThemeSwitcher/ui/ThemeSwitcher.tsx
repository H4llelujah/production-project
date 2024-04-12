import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
    invertedColor?: boolean;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { theme, toogleTheme } = useTheme();

    const {
        className,
        invertedColor = false,
    } = props;

    if (invertedColor) {
        return (
            <Button
                className={classNames('', {}, [className])}
                onClick={toogleTheme}
                theme={ButtonTheme.CLEAR}
            >
                {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
            </Button>
        );
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toogleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
