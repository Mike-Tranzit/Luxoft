describe("Header", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('should have header', function () {
        cy.lengthOfElementsShouldBeGreater('header');
    });

    it('header should be correct', function () {
        const headerText = 'List of civilizations from the game';
        cy.get('header').contains(headerText);
    });

    it('header should contain span', function () {
        cy.lengthOfElementsShouldBeGreater('header span');
    });

    it('span should be correct', function () {
        const spanText = 'Age of empires 2';
        cy.get('header span').contains(spanText);
    });
});
