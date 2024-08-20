import { useTranslation } from 'react-i18next';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { Button } from '@/shared/ui/deprecated/Button';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { add, decrement, increment } = useCounterActions();

    const { t } = useTranslation();

    const HandleIncrement = () => {
        increment();
    };

    const add7 = () => {
        add(7);
    };

    const HandleDecrement = () => {
        decrement();
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={add7}>{t('add 7')}</Button>
            <Button data-testid="increment-btn" onClick={HandleIncrement}>
                {t('increment')}
            </Button>
            <Button data-testid="decrement-btn" onClick={HandleDecrement}>
                {t('decrement')}
            </Button>
        </div>
    );
};
