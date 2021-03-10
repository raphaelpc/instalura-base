import styled, { css } from 'styled-components';

interface ModalWrapperProps {
  isOpen: boolean;
  onClick: any;
}

const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  
  display: flex;
  flex-direction: column;
  align-items: stretch;

  background: rgba(0, 0, 0, 0.1);
  margin: auto;
  overflow: scroll;
  transition: .3s;
  z-index: 100;

  ${({ isOpen }: ModalWrapperProps) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }

    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

export default ModalWrapper;
