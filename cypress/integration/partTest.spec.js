describe('test the partComponent/model', function(){
    it('tests if the bike is being shown', function(){
    
        cy.visit('http://localhost:4200/bikeApp/bike/fixie');
        cy.get('[data-cy=bike]').should('be.visible');
    });
    it('test if the right number of images is being loaded', function()
    {
        cy.get('[data-cy=partImage]').should('have.length', 16);
        
    });
    it('test if the part gets loaded if a chip is clicked', function()
    {
        cy.get('[data-cy=chips]').first().click();
        cy.get('[data-cy=partName]').contains('Achtertandwiel');
    });
    it('test if, when a chip is clicked, the lock is locked', function()
    {
        cy.get('[data-cy=chips]').first().click();
        cy.get('[data-cy=lock]').should('have.text','lock');
        
        
    });


});