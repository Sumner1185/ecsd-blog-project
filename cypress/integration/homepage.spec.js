describe("Al & Joe's website", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })

    it('Has main title content', () => {
        cy.get('.title').should("have.text","Welcome to Joe and Al's Blogtastic Blog!");
    })

    it("Has blog title content", () => {
        cy.get(':nth-child(1) > .blog-title').should("have.text", "Innovation at Scale")
        cy.get(':nth-child(5) > .blog-title').should("have.text", "Project Milestones")
        cy.get(':nth-child(9) > .blog-title').should("have.text", "Teaching Code")
    })

    it("Has blog content", () => {
        cy.get('.title-list > :nth-child(3)').contains("How do you optimise DevOps for innovation at scale?")
        cy.get('.title-list > :nth-child(7)').contains("The most successful career switchers take years to learn new skills")
        cy.get(':nth-child(11)').contains("Continuous learning has been a core value of ECS since the beginning.")
    })

    it("Has correct links in header", () => {
        cy.get('.active > .nav-link').should("have.text", "Home")
        cy.get(':nth-child(2) > .nav-link').should("have.text", "About")
        cy.get('.navbar-brand').should("have.text", "Tech Blog")
    })

    it("Has correct links in footer", () => {
        cy.get('.footer-copyright').should("have.text", "© 2020 Copyright: Joe and Al")
    })
})