describe("List", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.wait(2000);
    });

    it('list of civilizations should be visible', function () {
        cy.lengthOfElementsShouldBeGreater('.civilizations-list-container');
    });
});
