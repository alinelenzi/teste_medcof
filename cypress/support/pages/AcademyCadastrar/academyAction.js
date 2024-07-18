import { ELEMENTS } from "./elements.js";
import "cypress-real-events";

export class Academy {
  criaCadastro() {
    cy.origin('https://checkout.grupomedcof.com', () => {
      btnCriarConta = 'form > dsb-button';
      cy.get(btnCriarConta).click({ force: true });
      cy.get('span').eq(1).should('be.visible');

    })

  }

  clicaLinkUNIFESP(nome, email, celular) {
    cy.get('#conteudos').click();
    cy.get('a[href="https://www.grupomedcof.com.br/simulado-multimidia-unifesp"] > span').invoke('text').should("eq", "Simulado Multimídia UNIFESP");
    cy.get('a[href="https://www.grupomedcof.com.br/simulado-multimidia-unifesp"] ')
      .invoke("attr", "target", "_self")
      .click();

    cy.url().should("include", "/simulado-multimidia-unifesp/");
    cy.get('#form-field-name').type(nome);
    cy.get('#form-field-email').type(email);
    cy.get('#form-field-telefone').type(celular);
    cy.get('form button').click();
    cy.wait(4000)
    cy.url({ timeout: 10000 }).should("eq", "https://www.grupomedcof.com.br/simulado-multimidia-unifesp/");
    cy.wait(4000)
    cy.get('.elementor-progress-wrapper > .elementor-progress-bar', { timeout: 10000 }).realHover('mouse')
    cy.wait(4000)
    cy.get('.elementor-progress-wrapper > .elementor-progress-bar', { timeout: 10000 }).should('be.visible')
  }
}
