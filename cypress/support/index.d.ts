/// <reference types="Cypress" />
declare namespace Cypress {
  // cria intellisense da função criada no command.js
  interface Chainable<Subject> {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example
     * cy.dataCy('greeting')
     */
    dataCy(value: string): Chainable<Element>;

    /**
     * Custom command to select DOM element by name attribute.
     * @example
     * cy.name('input', 'greeting')
     */
    name(elemento: string, value: string): Chainable<Element>;

    /**
     * Custom command to select DOM element by id attribute.
     * @example
     * cy.id('greeting')
     */
    id(value: string): Chainable<Element>;

    /**
     * Custom command to select DOM element by class attribute.
     * @example
     * cy.class('greeting')
     */
    class(value: string): Chainable<Element>;

    /**
     * Custom command to select DOM element by ahref attribute.
     * @example
     * cy.ahref('/volcanic/checkout')
     */
    ahref(value: string): Chainable<Element>;

    /**
     * Custom command to select the DOM element by the data-cy attribute, assign value and validate.
     * @example
     * cy.dataCyType('greeting', '17992698572', '(17) 99269-8572')
     */
    dataCyType(dataCy: string, type: string, value: string): Chainable<Element>;

    /**
     * Custom command to select the DOM element by the data-cy attribute, select value and validate.
     * @example
     * cy.dataCySelect('greeting', 'teste', '1')
     */
    dataCySelect(
      dataCy: string,
      select: string,
      value: string,
    ): Chainable<Element>;

    /**
     * Used to display the details modality of the pokémon
     * @example
     * cy.showModal()
     */
    showModal(): Chainable<any>;

    /**
     * Used to add pokémon to the cart
     * @example
     * cy.addPokemon()
     */
    addPokemon(): Chainable<any>;

    /**
     * Used to checkout the purchase
     * @example
     * cy.checkout()
     */
    checkout(): Chainable<any>;

    /**
     * Used to finish the purchase
     * @example
     * cy.finish()
     */
    finish(): Chainable<any>;
  }
}
