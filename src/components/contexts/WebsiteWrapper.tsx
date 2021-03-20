import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';
import Footer from '../commons/Footer';
import Menu from '../commons/Menu';
import Modal from '../commons/Modal';
import Box from '../foundation/layout/Box';
import FormCadastro from '../patterns/FormCadastro';

interface WebsiteWrapperProviderProps {
  children: ReactNode;
}

interface WebsiteWrapperContextData {
  isModalOpen: boolean;
  handleCadastrar: () => void;
}

const WebsiteWrapperContext = createContext<WebsiteWrapperContextData>(
  // eslint-disable-next-line comma-dangle
  {} as WebsiteWrapperContextData
);

export function WebsiteWrapperProvider({ children }: WebsiteWrapperProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handleCadastrar() {
    setIsModalOpen(true);
  }

  return (
    <WebsiteWrapperContext.Provider
      value={{
        isModalOpen,
        handleCadastrar,
      }}
    >
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
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
          onClose={handleModalClose}
        >
          {propsDoModal => (
            <FormCadastro propsDoModal={propsDoModal} />
          )}
        </Modal>

        <Menu onCadastrar={handleCadastrar} />

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
