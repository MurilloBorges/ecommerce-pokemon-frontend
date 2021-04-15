/* eslint-disable no-undef */
/// <reference path="./index.d.ts" />

Cypress.Commands.add('dataCy', (value) => cy.get(`[data-cy=${value}]`));

Cypress.Commands.add('id', (value) => cy.get(`[id=${value}]`));

Cypress.Commands.add('name', (elemento, value) => cy.get(`${elemento}[name="${value}"]`));

Cypress.Commands.add('class', (value) => cy.get(`[class="${value}"]`));

Cypress.Commands.add('href', (value) => cy.get(`a[href*="${value}"]`));

Cypress.Commands.add('dataCyType', (dataCy, type, value) => cy.dataCy(dataCy).clear().type(type).should('have.value', value !== undefined ? value : type));

Cypress.Commands.add('dataCySelect', (dataCy, select, value) => cy.dataCy(dataCy).select(select).should('have.value', value !== undefined ? value : select));

Cypress.Commands.add('showModal', () => {
  cy.log('Exibindo modal');
  cy.class('spinner').then(($loader) => {
    console.log($loader);
    if (!$loader) {
      cy.dataCy('btn-show-modal-detail-pokemon').click({ force: true });
    }
  });
});

Cypress.Commands.add('addPokemon', () => {
  cy.log('Adicionando Pokémon ao carrinho');
  cy.class('spinner').then(($loader) => {
    if (!$loader) {
    }
  });
});

Cypress.Commands.add('checkout', () => {
  cy.log('Realizando o checkout da compra');
  cy.class('spinner').then(($loader) => {
    if (!$loader) {
    }
  });
});

Cypress.Commands.add('finish', () => {
  cy.log('Finalizando a compra');
  cy.class('spinner').then(($loader) => {
    if (!$loader) {
    }
  });
});
