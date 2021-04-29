/// <reference types="cypress" />
import LoginScreenPageObject from '../../../../src/components/screens/LoginScreen/LoginScreen.pageObject';

describe('/pages/app/login', () => {
  describe('when fill and submit a form login request', () => {
    it('go to the profile page', () => {
      // Pré Teste
      // verificar que realizou chamada para o backend
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
        .as('userLogin');

      // Cenário de teste
      const loginScreen = new LoginScreenPageObject(cy);
      loginScreen
        .fillLoginForm({ user: 'raphaelpc', password: 'senhasegura' })
        .submitLoginForm();

      // Asserções
      // verificar que redirecionou para "/app/profile"
      cy.url().should('include', '/app/profile');

      // verificar que foi criado cookie com o token
      cy.wait('@userLogin')
        .then(intercept => {
          const { token } = intercept.response.body.data;

          cy.getCookie('APP_TOKEN')
            .should('exist')
            .should('have.property', 'value', token);
        });
    });
  });
  // // cada it é um teste
  // it('Preencha os campos e vá para a page /app/profile', () => {
  //   // cenário de teste
  //   const loginScreen = new LoginScreenPageObject(cy);
  //   console.log(loginScreen);
  //   loginScreen
  //     .fillLoginForm({ user: 'raphaelpc', password: 'senhasegura' })
  //     .submitLoginForm();

  //   // verificar que realizou chamada para o backend
  //   cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
  //     .as('userLogin');

  //   // verificar que redirecionou para "/app/profile"
  //   cy.url().should('include', '/app/profile');

  //   // verificar que foi criado cookie com o token
  //   cy.wait('@userLogin')
  //     .then(intercept => {
  //       const { token } = intercept.response.body.data;

  //       cy.getCookie('APP_TOKEN')
  //         .should('exist')
  //         .should('have.property', 'value', token);
  //     });
  // });
});
