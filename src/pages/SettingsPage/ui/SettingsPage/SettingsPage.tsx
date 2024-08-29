import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widget/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface SettingsPageProps {
    className?: string;
}

const SettingsPage = (props: SettingsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16">
                <Text title={t('Страница настроек')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
};

export default SettingsPage;
