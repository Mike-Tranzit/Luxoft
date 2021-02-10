describe("App", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('should have container', function () {
        cy.lengthOfElementsShouldBeGreater('.container');
    });
});
