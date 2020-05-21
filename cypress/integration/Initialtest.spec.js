describe('InitialTest', function(){
    it('checks if site is accessible', function()
    {
        cy.visit('http://localhost:4200');
    });
});