import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCommonInfoEdit.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticleCommonInfoEditProps {
    className?: string;
    title?: string;
    subtitle?: string;
    imgLink?: string;
    onChangeTitle?: (title: string) => void;
    onChangeSubtitle?: (subtitle: string) => void;
    onChangeImgLink?: (imgLink: string) => void;
}

export const ArticleCommonInfoEdit = memo(
    (props: ArticleCommonInfoEditProps) => {
        const {
            className,
            title,
            subtitle,
            imgLink,
            onChangeTitle,
            onChangeSubtitle,
            onChangeImgLink,
        } = props;
        const { t } = useTranslation();

        const ImgErrorFallback = (
            <div className={cls.imgErrorFallback}>
                <AppLogo />
            </div>
        );

        const ImgFallback = <Skeleton width="100%" height={100} />;

        return (
            <VStack
                className={classNames(cls.ArticleCommonInfoCreate, {}, [
                    className,
                ])}
                gap="16"
                max
            >
                <HStack max>
                    <Input
                        placeholder={t('Заголовок')}
                        value={title}
                        onChange={onChangeTitle}
                    />
                </HStack>
                <HStack max>
                    <Input
                        placeholder={t('Подзаголовок')}
                        value={subtitle}
                        onChange={onChangeSubtitle}
                    />
                </HStack>
                <HStack max>
                    <Input
                        placeholder={t('Введите ссылку на изображение')}
                        value={imgLink}
                        onChange={onChangeImgLink}
                    />
                </HStack>
                <AppImage
                    className={cls.img}
                    src={imgLink}
                    errorFallback={ImgErrorFallback}
                    fallback={ImgFallback}
                />
            </VStack>
        );
    },
);
