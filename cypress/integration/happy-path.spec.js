/// <reference types="Cypress" />
/// <reference path="../support/commands.js" />

describe('Action happy path application', () => {
  beforeEach(() => {
    cy.fixture('fixtures.json').as('fixtures');
  });

  it('Realizando teste de exibição da modal de detalhe do pokémon', function () {
    cy.log('Testando click da imagem do pokémon para abertura da modal');
    cy.visit('/volcanic');
    cy.showModal();
  });

  it('Realizando teste de adicionar pokémon ao carrinho', function () {
    cy.log('Testando click do botão adicionar da vitrine de pokémon');
    cy.visit('/volcanic');
    cy.addPokemon();
  });

  it('Realizando teste de acesso ao checkout', function () {
    cy.log('Testando o acesso ao checkout');
    cy.checkout();
  });

  it('Realizando teste finalização da compra e retorno a home', () => {
    cy.log('Testando a finalização da compra e validação se o carrinho foi esvaziado');
    cy.finish();
  });
});
