describe('Página Sobre Nós - Grupo Medcof', () => {
  before(() => {
    // Visita a página "Sobre Nós" antes de cada teste
    cy.visit('https://www.grupomedcof.com.br/sobre-nos/')
    expect(true).to.equal(true);
  });

  it('Deve exibir o cabeçalho com o logotipo', () => {
    cy.get('header .logo').should('be.visible');
  });

  it('Deve exibir o menu de navegação', () => {
    cy.get('nav .main-menu').should('be.visible');
    cy.get('nav .main-menu li').should('have.length.greaterThan', 0);
  });

  it('Deve exibir o título da página "Sobre Nós"', () => {
    cy.get('h1').contains('Sobre Nós').should('be.visible');
  });

  it('Deve exibir a seção de conteúdo principal', () => {
    cy.get('.content-section').should('be.visible');
  });

  it('Deve exibir imagens relevantes', () => {
    cy.get('.content-section img').should('have.length.greaterThan', 0);
  });

  it('Deve exibir o rodapé com informações de contato', () => {
    cy.get('footer').should('be.visible');
    cy.get('footer .contact-info').should('be.visible');
  });
});