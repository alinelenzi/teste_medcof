///<reference types="cypress"/>
const faker = require("faker-br");

import { HomePage } from "../../../support/pages/Home/homeAction";
import { MedCofAcademy } from "../../../support/pages/MedCofAcademy/medcofAction";
import { Academy } from "../../../support/pages/AcademyCadastrar/academyAction";
const homePage = new HomePage();
const medcofAcademy = new MedCofAcademy();
const academy = new Academy();

describe("Dado que o usuario esta na Home", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/");
  });

  it("Então valido e não consigo enviar o formulário sem preencher os dados", () => {
    homePage.validarPaginaInicialCarregada();
    homePage.clicaLinkMdCofAcademy();
    medcofAcademy.validaEDirecionaParaAcessarConteudo();
    academy.criaCadastro();
  });

  it("Então valido que consigo enviar o formulário", () => {
    const nome = "Aline";
    const email = faker.internet.email().toLowerCase();
    const celular = 27988008800;
    homePage.validarPaginaInicialCarregada();
    academy.clicaLinkUNIFESP(nome, email, celular);
  });


});
