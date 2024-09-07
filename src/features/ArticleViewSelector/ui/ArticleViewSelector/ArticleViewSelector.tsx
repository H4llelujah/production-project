import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIconDeprecated from '@/shared/assets/icons/list-icon.svg';
import GridIconDeprecated from '@/shared/assets/icons/grid-icon.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import GridIcon from '@/shared/assets/icons/tile.svg';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewChange?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => GridIcon,
            off: () => GridIconDeprecated,
        }),
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewChange } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewChange?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                    border="round"
                >
                    <HStack gap="8">
                        {viewTypes &&
                            viewTypes.map((viewType) => (
                                <Icon
                                    clickable
                                    onClick={onClick(viewType.view)}
                                    Svg={viewType.icon}
                                    key={viewType.view}
                                    className={classNames('', {
                                        [cls.notSelected]:
                                            viewType.view !== view,
                                    })}
                                />
                            ))}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes &&
                        viewTypes.map((viewType) => (
                            <ButtonDeprecated
                                key={viewType.view}
                                theme={ButtonTheme.ICON_INSIDE}
                                onClick={onClick(viewType.view)}
                            >
                                <IconDeprecated
                                    Svg={viewType.icon}
                                    className={classNames('', {
                                        [cls.Selected]: viewType.view === view,
                                    })}
                                    width={20}
                                    height={20}
                                />
                            </ButtonDeprecated>
                        ))}
                </div>
            }
        />
    );
});
