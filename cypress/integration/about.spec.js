describe("Al & Joe's about us page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/about");
    })

    it('Has main title content', () => {
        cy.get('.title').should("have.text","Welcome to Joe and Al's Blogtastic Blog!");
    })
})