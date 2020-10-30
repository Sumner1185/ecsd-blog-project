

describe("Al & Joe's about us page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/about");
    })

    it('Has main title content', () => {
        cy.get('h1').should("have.text","About us...");
        cy.get('.about-section > p').contains("We are two developers")
    })

    it('Has our bio info content', () => {
        cy.get(':nth-child(3) > .card > .container > :nth-child(3)').contains("As a Delivery Consultant for ECS");
        cy.get(':nth-child(4) > .card > .container > :nth-child(3)').contains("Passionate and driven technologist")
    })

    it('Has links to emails', () => {
        cy.get(':nth-child(3) > .card > .container > .footer-link').contains("alastair.sumner@ecs.co.uk")
        cy.get(':nth-child(4) > .card > .container > .footer-link').contains("joe.jacques@ecs.co.uk")
    })

    it("Has link to return to home page", () => {
        cy.get('.active > .nav-link').should("have.text", "Home")
        cy.get('.active > .nav-link').click()
    })
})