import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widget/Page';
import cls from './ArticleEditPage.module.scss';
import { ArticleBlockCreatorModal } from '@/features/articleNewBlockCreate';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleCommonInfoEdit } from '@/features/ArticleCommonInfoEdit';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            <VStack max gap="16">
                {isEdit
                    ? `Страница редактирования статьи с id = ${id}`
                    : 'Создание новой статьи'}
                <Card max border="partial" padding="24">
                    <ArticleCommonInfoEdit />
                    <ArticleBlockCreatorModal />
                </Card>
            </VStack>
        </Page>
    );
};

export default memo(ArticleEditPage);
