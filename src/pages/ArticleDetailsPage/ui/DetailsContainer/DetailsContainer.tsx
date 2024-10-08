import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleDetails } from '@/entities/Article';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    return (
        <Card
            max
            fullHeight
            border="partial"
            className={className}
            padding="24"
        >
            <ArticleDetails id={id} />
        </Card>
    );
});
