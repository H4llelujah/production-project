import { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';
import { Portal } from '../Portal';
import { Overlay } from '../Overlay';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { toggleFeatures } from '@/shared/lib/features';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, onClose, isOpen } = props;

    const { theme } = useTheme();

    const { close, isClosing, isShow } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(cls.Modal, isShow ? mods : {}, [
                    className,
                    'app_modal',
                    theme,
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => cls.ModalNew,
                        off: () => cls.ModalOld,
                    }),
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
