import React, { ReactNode } from 'react';
import ModalWrapper from '../../styles/components/commons/Modal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

// children passado como função para o modal
// o modal envia as props para seu children
// pattern de inversão de controle do React
export default function Modal({ isOpen, onClose, children }: ModalProps) {
  function onClickHandle(event: { target: Element; }) {
    const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
    if (!isSafeArea) onClose();
  }

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={onClickHandle}
    >
      {children({
        'data-modal-safe-area': 'true',
      })}
    </ModalWrapper>
  );
}
