///<reference  types="cypress"/>

const Faker = require('faker')

describe("User Registry", () =>{
    let user

    before(() =>{
        user = {email: Faker.Internet.email(),
                    name: {
                        first: Faker.Name.firstName(),
                        last: Faker.Name.lastName()
                    }}
        cy.visit("?controller=authentication&back=my-account");
    })

        it("Informar um email valido", () =>{
            cy.get('#email_create').type(`${user.email}{enter}`)
        })

        it("preencher o formulario de cadastro", () =>{
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

        })

        it("Finalizar o cadastro do usuario", () =>{
            cy.get('#submitAccount > span').click();
            cy.get('.account > span').should('have.text', `${user.name.first} ${user.name.last}`);
        })

        it("Efetuar o sing out da pagina", () =>{
            cy.get('.logout').click();
        })



        it("Informar um email invalido", () =>{
            cy.get('#email_create').type(`${user.email}{enter}`)
        })


        

        // it("Validar obrigatoriedade do formulario", () =>{
        //     cy.get('#email_create').type(`${Faker.Internet.email()}{enter}`)
        //      .then(cy.get('#submitAccount > span').click())
        //         .then(cy.get('#center_column > div').should("be.visible"))
        // })

    })
