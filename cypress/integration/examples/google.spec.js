describe("A",() => {

    it("AAA", () => {

        cy.visit("https://google.com");

        
        cy.get('[class="gLFyf gsfi"]').type("A");


        cy.get('[class="gNO89b"]').last().type("{enter}",{force: true})
    })
})