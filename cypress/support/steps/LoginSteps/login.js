///<reference  types="cypress"/>

it("Acessando URL", () =>{
    cy.visit("?controller=authentication&back=my-account");
})