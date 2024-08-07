import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widget/Page';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();

    if (!id) {
        return null;
    }

    return (
        <Page className={classNames('', {}, [className])} data-testid="ProfilePage">
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
