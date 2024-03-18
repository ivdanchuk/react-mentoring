describe('SearchForm Component', () => {
    it('should display initial query', () => {
        cy.visit('http://localhost:3000/');
        cy.get('input').should('have.value', 'Search movie ...'); // Checks initial value of the input
    })
    it('should update the query on input change', () => {
        cy.visit('http://localhost:3000/');
        cy.get('input').type('Terminator');
        cy.get('input').should('have.value', 'Search movie ...Terminator');
    });
})
