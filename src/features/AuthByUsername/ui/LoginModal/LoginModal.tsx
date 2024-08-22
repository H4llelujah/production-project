import { Suspense } from 'react';

import { Loader } from '@/shared/ui/deprecated/Loader';
import { LoginFormAsync } from '../LoginForm/LoginFormAsync';
import { Modal } from '@/shared/ui/redesigned/Modal';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
