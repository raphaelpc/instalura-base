/// <reference types="cypress" />

describe('/pages/app/login', () => {
  // cada it é um teste
  it('Preencha os campos e vá para a page /app/profile', () => {
    // acessar a página de login
    cy.visit('/app/login');

    // preencher o input usuario
    // document.querySelector('input[name="usuario"]')
    // document.querySelector('#formCadastro input[name="usuario"]')
    cy.get('#formCadastro input[name="usuario"]')
      .type('raphaelpc');

    // preencher o input senha
    cy.get('#formCadastro input[name="senha"]')
      .type('senhasegura');

    // clicar no botão de submit
    cy.get('#formCadastro button[type="submit"]')
      .click();

    // verificar que redirecionou para "/app/profile"
    cy.url().should('include', '/app/profile');
  });
});
