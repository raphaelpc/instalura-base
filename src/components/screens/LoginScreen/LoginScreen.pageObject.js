export default class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    // acessar a página de login
    this.cy.visit('/app/login');
  }

  fillLoginForm({ user, password }) {
    // preencher o input usuario
    // document.querySelector('input[name="usuario"]')
    // document.querySelector('#formCadastro input[name="usuario"]')
    this.cy.get('#formCadastro input[name="usuario"]')
      .type(user);

    // preencher o input senha
    this.cy.get('#formCadastro input[name="senha"]')
      .type(password);

    // para estrutura fluente
    return this;
  }

  submitLoginForm() {
    // clicar no botão de submit
    this.cy.get('#formCadastro button[type="submit"]')
      .click();

    // para estrutura fluente
    return this;
  }
}
