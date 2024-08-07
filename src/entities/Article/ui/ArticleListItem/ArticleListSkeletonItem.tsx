import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ArticleListItem.module.scss';
import {
    ArticleView,
} from '../../model/consts/articleConsts';

interface ArticleListSkeletonItemProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListSkeletonItem = memo((props: ArticleListSkeletonItemProps) => {
    const { className, view } = props;

    const types = <Skeleton height={16} width={135} className={cls.types} />;
    const views = (
        <>
            <Skeleton height={16} width={30} className={cls.view} />
            <Skeleton height={16} width={16} border="50%" />
        </>
    );
    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton border="50%" height={30} width={30} />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton height={200} width={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Skeleton width={160} height={16} className={cls.title} />
            </Card>
        </div>
    );
});
