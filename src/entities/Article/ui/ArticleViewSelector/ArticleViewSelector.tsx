import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list-icon.svg';
import GridIcon from 'shared/assets/icons/grid-icon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewChange?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
    {
        view: ArticleView.SMALL,
        icon: GridIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewChange } = props;
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
        onViewChange?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes && viewTypes.map((viewType) => (
                <Button key={viewType.view} theme={ButtonTheme.ICON_INSIDE} onClick={onClick(viewType.view)}>
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.Selected]: viewType.view === view })}
                    />
                </Button>
            ))}
        </div>
    );
});
