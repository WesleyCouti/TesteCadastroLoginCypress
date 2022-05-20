///<reference  types="cypress"/>

const Faker = require('faker')

describe("User Registry", () =>{
let user

before(() =>{
    user = {email: Faker.Internet.email()}
    cy.visit("?controller=authentication&back=my-account");
})

    it("Informar um email valido", () =>{
        cy.get('#email_create').type(`${user.email}{enter}`)
    })

    it("preencher o formulario de cadastro", () =>{
        cy.url().should("include","#account-creation")

        cy.get('#email').should('include.value', user.email)

        cy.get('#id_gender1').check();
        cy.get('#customer_firstname').type(Faker.Name.firstName());
        cy.get('#customer_lastname').type(Faker.Name.lastName());
        cy.get('#passwd').type("Abc123$%");

        cy.get('#address1').type(Faker.Address.streetAddress());
        cy.get('#city').type(Faker.Address.city());
        cy.get('#id_state').select("3");
        cy.get('#postcode').type("12451");
        cy.get('#phone_mobile').type("11997894512");


    })

    it("Finalizar o cadastro do usuario", () =>{
        cy.get('#submitAccount > span').click();
    })

    // it("Validar obrigatoriedade do formulario", () =>{
    //     cy.get('#email_create').type(`${Faker.Internet.email()}{enter}`)
    //      .then(cy.get('#submitAccount > span').click())
    //         .then(cy.get('#center_column > div').should("be.visible"))
    // })

})
