/* eslint-disable react/jsx-props-no-spreading */
import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';
import Footer from '../commons/Footer';
import Menu from '../commons/Menu';
import Modal from '../commons/Modal';
import SEO from '../commons/SEO';
import Box from '../foundation/layout/Box';
import FormCadastro from '../patterns/FormCadastro';

interface WebsiteWrapperProviderProps {
  children: ReactNode;
  seoProps?: {
    headTitle?: string;
  };
  pageBoxProps?: {
    backgroundImage?: string;
    backgroundRepeat?: string;
    backgroundPosition?: string;
  };
  menuProps?: {
    display?: boolean;
  };
}

interface WebsiteWrapperContextData {
  openModalCadastro: () => void;
}

const WebsiteWrapperContext = createContext<WebsiteWrapperContextData>(
  // eslint-disable-next-line comma-dangle
  {} as WebsiteWrapperContextData
);

export function WebsiteWrapperProvider({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}: WebsiteWrapperProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showMenu = (
    menuProps === undefined
    || menuProps.display === undefined
    || menuProps.display
  );

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function openModalCadastro() {
    setIsModalOpen(true);
  }

  return (
    <WebsiteWrapperContext.Provider
      value={{
        openModalCadastro,
      }}
    >
      <SEO {...seoProps} />

      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        {...pageBoxProps}
      >
        {/*
          [SOLID]
          S = Single Responsability
          O = Open Closed
          L = Liskov Substitution
          I = Interface Segregation
          D = Dependency Inversion
        */ }
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        >
          {propsDoModal => (
            <FormCadastro propsDoModal={propsDoModal} />
          )}
        </Modal>

        {
          showMenu && (
            <Menu onCadastrar={openModalCadastro} />
          )
        }

        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Box>

        <Footer />
      </Box>
    </WebsiteWrapperContext.Provider>
  );
}

export function useWebsiteWrapper() {
  const context = useContext(WebsiteWrapperContext);

  return context;
}
