import React from 'react';
import { motion } from 'framer-motion';
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
      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: '-100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
        })}
      </motion.div>
    </ModalWrapper>
  );
}
