/// <reference  types="cypress"/>

const Faker = require('faker')

/*global Then, When, Given*/

let user = {email: Faker.Internet.email(),
    name: {
        first: Faker.Name.firstName(),
        last: Faker.Name.lastName()
    }}

When('informo meu email para cadastro de usuario', () => {
    cy.get('#email_create').type(`${user.email}{enter}`)
})


And('finalizo meu cadastro preenchendo todos os dados do usuario', () => {
    cy.url().should("include","#account-creation")
    cy.get('#email').should('have.value', user.email)
    cy.get('#id_gender1').check();
    cy.get('#customer_firstname').type(user.name.first);
    cy.get('#customer_lastname').type(user.name.last);
    cy.get('#passwd').type("Abc123$%");
    cy.get('#address1').type(Faker.Address.streetAddress());
    cy.get('#city').type(Faker.Address.city());
    cy.get('#id_state').select("3");
    cy.get('#postcode').type("12451");
    cy.get('#phone_mobile').type("11997894512");

    cy.get('#submitAccount > span').click();
})


Then('O sistema realiza meu cadastro com sucesso me autenticando na pagina', () => {
    cy.get('.account > span').should('have.text', `${user.name.first} ${user.name.last}`);
})
