import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import Button from '../commons/Button';
import TextField from '../forms/TextField';
import Text from '../foundation/Text';
import Box from '../foundation/layout/Box';
import Grid from '../foundation/layout/Grid';
import successAnimation from '../../styles/lottie/success.json';
import errorAnimation from '../../styles/lottie/error.json';

enum FormStates {
  DEFAULT,
  LOADING,
  DONE,
  ERROR,
}

function FormContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [submissionStatus, setSubmissionStatus] = useState(FormStates.DEFAULT);

  const [userInfo, setUserInfo] = useState({
    nome: 'Raphael Pena',
    usuario: 'raphaelpc',
  });

  const isFormInvalid = userInfo.usuario.length === 0 || userInfo.nome.length === 0;

  // capturadores, pegadores de ação, manejadores
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitted(true);

    // DTO - Data Transfer Object
    // Objeto de cola para a plicação externa
    const userDTO = {
      username: userInfo.usuario,
      name: userInfo.nome,
    };

    fetch('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDTO),
    })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Não foi possível cadastrar o usuário');
      })
      .then(() => {
        // console.log(res);
        setSubmissionStatus(FormStates.DONE);
      })
      .catch(() => {
        // console.log(error);
        setSubmissionStatus(FormStates.ERROR);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>

      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber de tudo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>

      {/* https://assets4.lottiefiles.com/packages/lf20_tAtUrg.json */}
      {isSubmitted && submissionStatus === FormStates.DONE && (
        <Box
          marginTop="17px"
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{
              animationData: successAnimation,
              loop: false,
              autoplay: true,
            }}
          />
        </Box>
      )}

      {/* https://lottiefiles.com/14331-error */}
      {isSubmitted && submissionStatus === FormStates.ERROR && (
        <Box
          marginTop="17px"
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{
              animationData: errorAnimation,
              loop: false,
              autoplay: true,
            }}
          />
        </Box>
      )}
    </form>
  );
}

interface FormCadastroProps {
  propsDoModal: any;
}

export default function FormCadastro({ propsDoModal }: FormCadastroProps) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
