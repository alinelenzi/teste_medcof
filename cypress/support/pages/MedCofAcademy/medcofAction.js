import { ELEMENTS } from "./elements.js";

export class MedCofAcademy {
  validaEDirecionaParaAcessarConteudo() {
    cy.url().should("include", "https://hiit.grupomedcof.com.br/r1-acesso-direto");

    cy.get(ELEMENTS.acessar)
      .eq(0)
      .invoke("attr", "target", "_self")
      .click();

    cy.window().then(win => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = 'https://checkout.grupomedcof.com/lead?source=direto&seller=performance&product-slug=medcof-hitt-r1-ac-sem-qbank';
      });
    });

    cy.get(ELEMENTS.queroAcesso)
      .eq(0)
      .invoke('removeAttr','target')
      .click();
  
  }
}
