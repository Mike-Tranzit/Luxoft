import cy = Cypress.cy;

describe("Detail", () => {
    let element: ReturnType<cy["get"]>;
    beforeEach(() => {
        cy.visit("/");
        cy.wait(2000);
        element = cy.get(':nth-child(1) > label');
        element.click();
    });

    it('details of civilizations should be visible', function () {
        cy.lengthOfElementsShouldBeGreater('article > :nth-child(1)');
    });

    it('selected civilizations has class active', function () {
        element.should('have.class', 'active');
    });
});
