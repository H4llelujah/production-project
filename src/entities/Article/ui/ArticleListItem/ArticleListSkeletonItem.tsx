import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/consts/articleConsts';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListSkeletonItemProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListSkeletonItem = memo(
    (props: ArticleListSkeletonItemProps) => {
        const { className, view } = props;

        const mainClass = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => cls.ArticleListItemRedesigned,
            off: () => cls.ArticleListItem,
        });

        const Skeleton = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => SkeletonRedesigned,
            off: () => SkeletonDeprecated,
        });

        if (view === ArticleView.BIG) {
            const cardContent = (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <>
                            <div className={cls.header}>
                                <Skeleton border="50%" height={30} width={30} />
                                <Skeleton
                                    width={200}
                                    height={16}
                                    className={cls.username}
                                />
                            </div>
                            <Skeleton
                                width="100%"
                                height={24}
                                className={cls.title}
                            />
                            <Skeleton
                                width={350}
                                height={24}
                                className={cls.subtitle}
                            />
                            <Skeleton height={420} className={cls.img} />
                            <Skeleton width="100%" height={60} />
                            <HStack
                                justify="between"
                                className={cls.footerSkeleton}
                            >
                                <Skeleton height={36} width={200} />
                                <Skeleton height={24} width={100} />
                            </HStack>
                        </>
                    }
                    off={
                        <>
                            <div className={cls.header}>
                                <Skeleton border="50%" height={30} width={30} />
                                <Skeleton
                                    width={150}
                                    height={16}
                                    className={cls.username}
                                />
                                <Skeleton
                                    width={150}
                                    height={16}
                                    className={cls.date}
                                />
                            </div>
                            <Skeleton
                                width={250}
                                height={24}
                                className={cls.title}
                            />
                            <Skeleton height={200} className={cls.img} />
                            <div className={cls.footer}>
                                <Skeleton height={36} width={200} />
                            </div>
                        </>
                    }
                />
            );

            return (
                <div
                    className={classNames(mainClass, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <CardRedesigned
                                padding="24"
                                border="round"
                                className={cls.card}
                            >
                                {cardContent}
                            </CardRedesigned>
                        }
                        off={
                            <CardDeprecated className={cls.card}>
                                {cardContent}
                            </CardDeprecated>
                        }
                    />
                </div>
            );
        }

        const cardContent = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <>
                        <Skeleton
                            width="100%"
                            height={140}
                            className={cls.img}
                        />
                        <VStack gap="4" className={cls.infoSkeletonWrapper}>
                            <Skeleton
                                className={cls.text}
                                width={224}
                                height={60}
                            />
                            <HStack justify="between">
                                <Skeleton width={70} height={20} />
                                <Skeleton width={100} height={20} />
                            </HStack>
                            <HStack gap="4">
                                <Skeleton
                                    width={32}
                                    height={32}
                                    border="100%"
                                />
                                <Skeleton width={50} height={20} />
                            </HStack>
                        </VStack>
                    </>
                }
                off={
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={cls.img}
                        />
                        <div className={cls.infoWrapper}>
                            <Skeleton width={130} height={16} />
                        </div>
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.title}
                        />
                    </div>
                }
            />
        );

        return (
            <div className={classNames(mainClass, {}, [className, cls[view]])}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <CardRedesigned
                            padding="0"
                            border="round"
                            className={cls.card}
                        >
                            {cardContent}
                        </CardRedesigned>
                    }
                    off={
                        <CardDeprecated className={cls.card}>
                            {cardContent}
                        </CardDeprecated>
                    }
                />
            </div>
        );
    },
);
