describe("Loading", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('loader should be visible', function () {
        cy.lengthOfElementsShouldBeGreater('.loading');
    });
});
